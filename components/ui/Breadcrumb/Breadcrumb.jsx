import Link from "next/link";
import { Home, DoubleRightArrow } from "@/components/icons";

const Breadcrumb = (props) => {
  const { previousPage, previousPageLink, currentPage } = props;

  return (
    <section className="content-wrapper font-medium pb-10 flex items-center justify-start space-x-5">
      <Link href="/">
        <div className="flex items-center justify-center space-x-4">
          <Home />
          <div className="text-primary hover:text-gray cursor-pointer">Home</div>
        </div>
      </Link>
      {previousPage ? (
        <div className="flex items-center justify-center">
          <DoubleRightArrow />
          <Link href={previousPageLink}>{previousPage}</Link>
        </div>
      ) : (
        ""
      )}
      {currentPage ? (
        <div className="flex items-center justify-center text-gray">
          <DoubleRightArrow />
          <div>{currentPage}</div>
        </div>
      ) : (
        ""
      )}
    </section>
  );
};

export default Breadcrumb;
