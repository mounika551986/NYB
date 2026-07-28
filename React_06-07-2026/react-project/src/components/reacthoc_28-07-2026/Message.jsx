import User from "./User";
import WithMessage from "./WithMessage";

const EnhancedUser= WithMessage(User);
function Message(){
    return<EnhancedUser/>

}
export default Message;
