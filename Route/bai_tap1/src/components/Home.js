import { useParams } from "react-router-dom";
function Home() {
  let { email } = useParams();
  return (
    <div>
      <h3>Bạn là {email} </h3>
      <p>Bạn đã login thành công</p>
    </div>
  );
}
export default Home;
