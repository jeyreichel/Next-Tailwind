import React from "react";
import Data from "@/items.json";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import PostDetailComp from "./detail";

type Params = { uid: number };

export async function generateStaticParams() {
  return Data.jsonData.cards.map((card) => ({
    uid: card.id + "",
  }));
}

const PostDetail = ({ params }: { params: Params }) => {
  return (
    <DefaultLayout>
      <PostDetailComp params={params} />
    </DefaultLayout>
  );
};

export default PostDetail;
