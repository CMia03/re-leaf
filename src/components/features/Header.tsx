import FirstMenu from "./header/FirstMenu";
import FollowComponents from "./header/Follow";
import SecondMenuComponents from "./header/SecondMenu";

const Header = () => {
  return (
    <header>
      <div className="bg-brown">
        <FollowComponents />
      </div>
      <div>
        <FirstMenu />
      </div>
      <hr />
      <SecondMenuComponents />
    </header>
  );
};
export default Header;
