import UserContext from "../../pages_07-07-2026/providerconsumerpage_13-07-2026/UserContext";

function Footer() {
  return (
<UserContext.Consumer>
     {(value) => (
        <h2>Footer : {value.user}</h2>
      )}
</UserContext.Consumer>
  )
}
export default Footer;
