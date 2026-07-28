import Student from "./Student";
import WithLoading from "./WithLoading";

const StudentWithLoading = WithLoading(Student);

function AppHoc() {
  return <StudentWithLoading loading={false} />;
}

export default AppHoc;