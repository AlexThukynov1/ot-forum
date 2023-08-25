import { FC, useState } from "react";
import Container from "../../../container/Container";
import ArticleList from "../article-list/ArticleList";
import FeedTogle from "../feed-togle/FeedTogle";
import { useGetGlobalFeedQuery } from "../api/repository";
import ReactPaginate from "react-paginate";
import { PAGE_SIZE } from "../consts";
import { useSearchParams } from "react-router-dom";
import { serialiseSearchParams } from "../../../../utils/router";
import TagCloud from "../tag-cloud/tag-cloud";

interface FeedProps {}

const Feed: FC<FeedProps> = ({}) => {
  const [searchPArams, setSearchParams] = useSearchParams();
  const [page, setPage] = useState(
    searchPArams.get("page") ? Number(searchPArams.get("page")) : 0
  );
  const handePageChange = ({ selected }: { selected: number }) => {
    setPage(selected);
    setSearchParams(serialiseSearchParams({ page: String(selected) }));
  };

  const { data, error, isLoading, isFetching } = useGetGlobalFeedQuery({
    page,
  });

  if (isLoading || isFetching) {
    return <Container>Feed loading...</Container>;
  }
  if (error) {
    <Container>Error while loading feed</Container>;
  }
  return (
    <Container>
      <FeedTogle />
      <div className="flex  flex-col">
        <div className="flex gap-2">
          <ArticleList list={data?.articles || []} />
          <div className="w-1/4 pl-3">
            <TagCloud/>
          </div>
        </div>
        <div className="w-3/4">
          <nav className="my-6">
            <ReactPaginate
              pageCount={(data?.articlesCount || 0) / PAGE_SIZE}
              pageRangeDisplayed={(data?.articlesCount || 0) / PAGE_SIZE}
              previousLabel={null}
              nextLabel={null}
              containerClassName="flex "
              pageClassName="group block"
              pageLinkClassName="p-3 text-logo-green bg-white border border-logo-light-black -ml-px group-[&:nth-child(2)]:rounded-l group-[&:nth-last-child(2)]:rounded-r hover:bg-logo-page-hover-bg"
              activeClassName="active group"
              activeLinkClassName="group-[.active]:bg-logo-green group-[.active]:text-white group-[.active]:border-logo-green"
              onPageChange={handePageChange}
              forcePage={page}
            />
          </nav>
        </div>
      </div>
    </Container>
  );
};

export default Feed;
