import { comments } from "@/constatnts/examples";


const Comments = () => {
  return (
    <section className="w-full bg-main-dark pt-10 md:pt-32 px-3 pb-4 md:pb-32">
      <h2 className="text-xl md:text-4xl text-center font-bold capitalize ml-5 md:ml-0">
        What customer say about us
      </h2>
      <p className="text-center mt-3 w-1/2 mx-auto">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
        aspernatur, laborum quos reprehenderit quam quod architecto! Ipsum quia
        minus unde!
      </p>
      <div className="flex items-center justify-center gap-5 mt-20 w-3/4 mx-auto">
        {
            comments && comments.map(({id, img, name, time, comment}) => (
                <div key={id} className="bg-white rounded px-10 py-5 shadow">
                    <div className="flex items-center gap-3 mb-5">
                        <img src={img} className="rounded-full w-12" alt={name} />
                        <div className="flex flex-col">
                            <p className="font-semibold">{name}</p>
                            <p className="text-gray-500">{time}</p>
                        </div>
                    </div>
                    <p>{comment}</p>
                </div>
            ))
        }
        
      </div>
    </section>
  );
};

export default Comments;
