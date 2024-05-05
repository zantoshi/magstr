import { SimplePool } from 'nostr-tools/pool';

const pool = new SimplePool();
let relays = ['wss://relay.damus.io'];

const pubKeys = process.env.PUBLISHER_PUBKEYS
  ? JSON.parse(process.env.PUBLISHER_PUBKEYS)
  : [];

export const getProfileMetadata = async (pubkey) => {
  let profileEvent = await pool.get(relays, {
    kinds: [0],
    authors: [pubkey],
  });
  const parsedContent = JSON.parse(profileEvent.content);
  const nip05 = parsedContent.nip05;

  return nip05;
};

export const getLightningAddress = async (pubkey) => {
  const { bech32 } = require('bech32');

  let profileEvent = await pool.get(relays, {
    kinds: [0],
    authors: [pubkey],
  });
  const parsedContent = JSON.parse(profileEvent.content);
  const lud16 = parsedContent.lud16;

  const [username, domain] = lud16.split('@');
  const url = `https://${domain}/.well-known/lnurlp/${username}`;
  // Convert URL to buffer
  const urlBuffer = Buffer.from(url);

  // Convert buffer to 5-bit array words
  const words = bech32.toWords(urlBuffer);

  // Encode as Bech32
  const bech32Url = bech32.encode('lnurl', words, 99999);

  return bech32Url;
};

export const getArticle = async (nostrEventId) => {
  let article = await pool.get(relays, {
    ids: [nostrEventId],
  });
  return article;
};

export const getArticles = async () => {
  let articles = [];
  let h = pool.subscribeMany(
    relays,
    [
      {
        kinds: [30023],
        authors: pubKeys,
      },
    ],
    {
      onevent(event) {
        articles.push(event);
      },
      oneose() {
        console.log('Subscription closed');
      },
    }
  );

  // Wait for a short while to allow for incoming events
  await new Promise((resolve) => setTimeout(resolve, 500));
  h.close();

  return articles;
};
