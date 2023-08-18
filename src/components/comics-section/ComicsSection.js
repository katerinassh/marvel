import ComicsBanner from "../comics-banner/ComicsBanner";
import ComicsCardMenu from "../comics-card-menu/ComicsCardMenu";
import SingleComicsPage from "../single-comics-page/SingleComicsPage";


function ComicsSection() {
    return(
        <>
            <ComicsBanner/>
            {/* <ComicsCardMenu/> */}
            <SingleComicsPage/>
        </>
    )
}

export default ComicsSection;