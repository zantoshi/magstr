import Link from "next/link";
import { ArrowRight } from "lucide-react";
import {
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent,
  CardFooter,
  Card,
} from "@/components/ui/card";

const ArticleCard = ({ title, author, date, cardImage, link }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg font-bold mt-4 text-indigo-900">
          {title}
        </CardTitle>
        <CardDescription className="text-sm text-indigo-700">
          By {author} | {date}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-indigo-700 line-clamp-2">Placeholder</p>
      </CardContent>
      <CardFooter>
        <Link
          className="flex items-center text-indigo-900 hover:underline"
          href={link}
        >
          Read More
          <ArrowRight className="ml-2 h-4 w-4" />
        </Link>
      </CardFooter>
    </Card>
  );
};

export default ArticleCard;
