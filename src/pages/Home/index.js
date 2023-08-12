import HomeBanner from './Banner/Banner';
import Matches from './Matches';
import NewLastest from './News';
import Player from './Players';
import Recommend from './Recommend';
import Video from './Video';

function Home() {
  return (
    <div className="flex min-h-screen flex-col mt-[96px] pb-20 bg-[#FFFFFF] dark:bg-bgDarkMode">
      <HomeBanner />
      <NewLastest />
      <Video />
      <Matches />
      {/* <Player /> */}
      <Recommend />
    </div>
  );
}

export default Home;
