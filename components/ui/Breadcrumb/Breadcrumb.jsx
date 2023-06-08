import Link from "next/link";
import { Home, DoubleRightArrow } from "@/components/icons";

const Breadcrumb = (props) => {
  const { previousPage, previousPageLink, currentPage } = props;

  return (
    <section className="content-wrapper font-medium pb-10 flex items-center justify-center">
      <Link href="/">
        <div className="flex items-center justify-center">
          <Home />
          <div className="text-primary hover:text-gray cursor-pointer ml-2">
            Home
          </div>
        </div>
      </Link>
      {previousPage && (
        <div className="flex items-center justify-center text-gray ml-2">
          <DoubleRightArrow />
          <Link href={previousPageLink}>{previousPage}</Link>
        </div>
      )}

      {currentPage && (
        <div className="flex items-center justify-center text-gray ml-2">
          <DoubleRightArrow />
          <div className="ml-2">{currentPage}</div>
        </div>
      )}
    </section>
  );
};

export default Breadcrumb;
