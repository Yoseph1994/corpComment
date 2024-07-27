import FeedbackForm from "../feedback/FeedbackForm";
import Logo from "../Logo";
import PageHeading from "../PageHeading";
import Pattern from "../Pattern";

function Header({ handleAddFeedback }) {
  return (
    <header>
      <Pattern />
      <Logo />
      <PageHeading />
      <FeedbackForm handleAddFeedback={handleAddFeedback} />
    </header>
  );
}

export default Header;
