import HomeBanner from './Banner/Banner';
import Matches from './Matches';
import NewLastest from './News';
import Player from './Players';
import Recommend from './Recommend';

function Home() {
  return (
    <div className="flex min-h-screen flex-col mt-[128px] pb-20 bg-[#FFFFFF] dark:bg-bgDarkMode">
      <HomeBanner />
      <NewLastest />
      <Matches />
      <Player />
      <Recommend />
    </div>
  );
}

export default Home;
