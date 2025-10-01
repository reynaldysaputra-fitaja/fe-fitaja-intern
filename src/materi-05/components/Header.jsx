import { useGetPostsQuery } from "../service/api";

export default function Header() {
  const { data } = useGetPostsQuery();
  const products = data || [];
  return (
    <div>
      {products.length === 0 ? (
        <div/>) : (
          <div className="mx-auto mt-10 md:mt-15">
          <p className="text-center text-gray-500 text-base md:text-base lg:text-lg">
            LAST UPDATED ON OCTOBER 2022
          </p>
          <p className="text-center font-bold text-3xl md:text-4xl lg:text-5xl mb-10 lg:mb-15">
            10 best really cheap <br/> gaming laptops 
          </p>
        </div>
      )}
    </div>
    
  )
}
