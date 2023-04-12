import axios from 'axios';

export async function getStaticProps() {
  const { data } = await axios.get(
    'https://api.covid19api.com/total/country/vietnam'
  );

  const formattedData = data.map((day) => ({
    date: day.Date.slice(0, 10),
    confirmed: day.Confirmed,
    active: day.Active,
    recovered: day.Recovered,
    deaths: day.Deaths,
  }));

  return {
    props: {
      data: formattedData,
    },
  };
}

export default function Home({ data }) {
  return (
    <div>
      <h1>Thông tin COVID-19 tại Việt Nam</h1>
      <table border={1}>
        <thead>
          <tr>
            <th>Ngày thống kê</th>
            <th>Số ca xác nhận</th>
            <th>Số ca đang điều trị</th>
            <th>Số ca đã khỏi</th>
            <th>Số ca tử vong</th>
          </tr>
        </thead>
        <tbody>
          {data.map((day) => (
            <tr key={day.date}>
              <td>{day.date}</td>
              <td>{day.confirmed}</td>
              <td>{day.active}</td>
              <td>{day.recovered}</td>
              <td>{day.deaths}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
