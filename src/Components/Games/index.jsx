
import Capacete from '../../Assets/capacete.png';
import Quiz from '../../Assets/card-pil.png';
import Cards from '../../Assets/cards.png';

const Games = () => {
    return (
        <section id='Games'className='my-24 md:px-14 max-w-screen-2xl text-right'>
            <div className="flex flex-col lg:flex-row justify-between items-start gap-10">
                <div>
                    <h3 className='text-3xl font-bold lg:w-1/2 mb-3 text-branco100 uppercase font-quantico' > Conheça nossos games </h3>
                    <p> Explore nossa plataforma Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi minus quis fugiat iste eius necessitatibus, esse vel? Aliquam, error architecto! </p>
                </div>
            
                <div className="w-full lg:w-3/4">
                    <div className='bg-[rgba(255,255,255,0.04)] rounded-[35px] h-96 shadow-3xl p-8 items-center
                     flex justify-center hover:-translate-y-4 transition-all duration-300'>
                        <div>
                            <img src={Cards} alt="" />
                            <h5 className='text-2xl font-semibold text-branco100 px-5 text-center mt-5'>Álbum de Cards</h5>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Games;