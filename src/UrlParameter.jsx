import { useParams, useLocation } from "react-router-dom";

export const UrlParameter = () => {
  const { id } = useParams();
  const { search } = useLocation();
  const query = new URLSearchParams(search);
  return (
    <div>
      <h1>UrlParameterページです</h1>
      <p>パラメーター {id} はです</p>
      <p>クエリパラメーター {query.get("name")} はです</p>
    </div>
  );
};
