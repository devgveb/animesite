import Image from "next/image"

import mainBanner from "@/assets/banner-img-1.png"
import cardOne from "@/assets/card-img-1.png"
import cardTwo from "@/assets/card-img-2.png"
import cardThree from "@/assets/card-img-3.png"
import cardFour from "@/assets/card-img-4.png"
import cardFive from "@/assets/card-img-5.png"
import newOne from "@/assets/news-1.png"
import newTwo from "@/assets/news-2.png"
import newThree from "@/assets/news-3.png"
import Gender1 from "@/assets/gender_img_1.png"
import Gender2 from "@/assets/gender_img_2.png"
import Gender3 from "@/assets/gender_img_3.png"
import Gender4 from "@/assets/gender_img_4.png"
import Gender5 from "@/assets/gender_img_5.png"
import Gender6 from "@/assets/gender_img_6.png"
import bannerRodape from "@/assets/banner-rodape.png"
import Link from "next/link"

const homePage = () =>{
  return(
    <main className="containerScreen">

        <section className="w-full">
                <div className="relative">
                      <Image src={mainBanner} alt="" className="w-full h-auto"/>

                      <div className="absolute top-1/2 -translate-y-1/2 p-5">
                            <h1 className="text-6xl text-bold text-white">Sua próxima <br/>aventura começa aqui.</h1>
                            <p className="text-white text-xl pt-2">Descubra mais sobre animes, novidades e histórias que merecem sua atenção.</p>

                            <div className="w-full flex flex-row flex-wrap gap-5 py-3">
                              <Link href="#" className="bg-orange-500 px-5 py-3 text-white text-bold text-md rounded">Explorar animes</Link>
                              <Link href="#" className="text-white px-5 py-3 border-1 border-white rounded">Últimas Noticias</Link>
                            </div>
                      </div>
                </div>


        </section>

        <div className="w-full h-auto">

        <section className="flex flex-row justify-between py-5">
          <p className="text-white text-2xl text-bold">Em destaque</p>
          <Link href="#" className="text-lg text-white">Ver todos</Link>
        </section>

        <section className="flex flex-row flex-wrap">

            <div className="basis-full md:basis-1/2 lg:basis-1/3 xl:basis-1/5">

              <div className="p-2">
                  <Image src={cardOne} alt=""/>
                  <div>
                    <h4 className="text-2xl text-white">Bleach</h4>
                    <div className="flex flex-row gap-2">
                      <p className="text-white bg-cyan-500 p-1 text-sm rounded">Ação</p>
                      <p className="text-white bg-cyan-500 p-1 text-sm rounded">Fantasia</p>
                      <p className="text-white bg-cyan-500 p-1 text-sm rounded">Histórico</p>
                    </div>
                  </div>
              </div>
            
            </div>

            <div className="basis-full md:basis-1/2 lg:basis-1/3 xl:basis-1/5">
            
              <div className="p-2">
                  <Image src={cardTwo} alt=""/>
                  <div>
                    <h4 className="text-2xl text-white">Bleach</h4>
                    <div className="flex flex-row gap-2">
                      <p className="text-white bg-cyan-500 p-1 text-sm rounded">Sci-Fi</p>
                      <p className="text-white bg-cyan-500 p-1 text-sm rounded">Drama</p>
                      <p className="text-white bg-cyan-500 p-1 text-sm rounded">Psicológico</p>
                    </div>
                  </div>
              </div>
            
            
            </div>
            <div className="basis-full md:basis-1/2 lg:basis-1/3 xl:basis-1/5">
            
              <div className="p-2">
                  <Image src={cardThree} alt=""/>
                  <div>
                    <h4 className="text-2xl text-white">Bleach</h4>
                    <div className="flex flex-row gap-2">
                      <p className="text-white bg-cyan-500 p-1 text-sm rounded">Aventura</p>
                      <p className="text-white bg-cyan-500 p-1 text-sm rounded">Fantasia</p>
                      <p className="text-white bg-cyan-500 p-1 text-sm rounded">Slice of Life</p>
                    </div>
                  </div>
              </div>
            
            
            </div>

            <div className="basis-full md:basis-1/2 lg:basis-1/3 xl:basis-1/5">
            
              <div className="p-2">
                  <Image src={cardFour} alt=""/>
                  <div>
                    <h4 className="text-2xl text-white">Bleach</h4>
                    <div className="flex flex-row gap-2">
                      <p className="text-white bg-cyan-500 p-1 text-sm rounded">Slice of Life</p>
                      <p className="text-white bg-cyan-500 p-1 text-sm rounded">Romance</p>
                      <p className="text-white bg-cyan-500 p-1 text-sm rounded">Escola</p>
                    </div>
                  </div>
              </div>
            
            
            </div>

            <div className="basis-full md:basis-1/2 lg:basis-1/3 xl:basis-1/5">
            
              <div className="p-2">
                  <Image src={cardFive} alt=""/>
                  <div>
                    <h4 className="text-2xl text-white">Bleach</h4>
                    <div className="flex flex-row gap-2">
                      <p className="text-white bg-cyan-500 p-1 text-sm rounded">Sci-Fi</p>
                      <p className="text-white bg-cyan-500 p-1 text-sm rounded">Aventura</p>
                      <p className="text-white bg-cyan-500 p-1 text-sm rounded">Seinen</p>
                    </div>
                  </div>
              </div>
            
            
            </div>

        </section>

        </div>

        <div className="w-full h-auto">

          <section className="flex flex-col">
            <h3 className="text-5xl text-bold text-white">Além dos episódios</h3>
            <p className="text-xl text-white py-2">Teorias, descobertas e histórias para continuar a conversar.</p>
          </section>

          <section className="flex flex-row flex-wrap">

            <div className="basis-full md:basis-1/2 lg:basis-1/3">
            
              <div className="p-2">
                  <Image src={newOne} alt="Ilustração sobre One Piece" />
                  <div className="p-3">
                    <p className="w-fit text-sm bg-red-500 p-1 rounded">TEORIAS</p>
                    <h4 className="text-2xl text-white">One Piece: os mistérios que ainda desafiam os fãs</h4>
                    <p className="text-md text-gray-100">Pistas,segredos e perguntas que mantêm a aventura viva.</p>
                  </div>
              </div>
            
            </div>

            <div className="basis-full md:basis-1/2 lg:basis-1/3">
            
              <div className="p-2">
                  <Image src={newTwo} alt="Ilustração sobre protagonistas de anime" />
                  <div className="p-3">
                    <p className="w-fit text-sm bg-red-500 p-1 rounded">PERSONAGENS</p>
                    <h4 className="text-2xl text-white">Muito além do poder: o que faz um protagonista marcar você?</h4>
                    <p className="text-md text-gray-100">As escolhas e os conflitos por trás dos heróis ineisqueciveis.</p>
                  </div>
              </div>
            
            </div>

            <div className="basis-full md:basis-1/2 lg:basis-1/3">
            
              <div className="p-2">
                  <Image src={newThree} alt="Ilustração da seleção de animes para maratonar" />
                  <div className="p-3">
                    <p className=" w-fit text-sm bg-red-500 p-1 rounded">PARA MARATONAR</p>
                    <h4 className="text-2xl text-white">Poucos episódios, grandes histórias</h4>
                    <p className="text-md text-gray-100">Uma seleção de animes curtos para conhecer no fim de semana.</p>
                  </div>
              </div>
            
            </div>

          </section>

        </div>

        <section className="w-full h-auto">
            <div className="flex flex-col">
              <h4 className="text-3xl text-white">Os melhores de cada gênero</h4>
              <p className="text-xl text-white">Uma seleção especial para descobrir sua próxima história favorita.</p>
            </div>

            <div className="flex flex-wrap flex-row p-5">

              <div className="md:basis-1/3 lg:basis-1/3 xl:basis-1/6">
                  <div className="relative p-2">
                    <Image src={Gender1} alt="Demon Slayer" className="opacity-80"/>
                    <div className="absolute top-5 bg-red-500 text-white text-sm rounded ml-2 px-2 py-1"><p>Ação</p></div>
                    <div className="absolute bottom-0 flex flex-col p-5">
                    <h5 className="text-white text-2xl text-bold">Demon Slayer</h5>
                    <p className="text-white text-md">Batalhas de tirar o fólego.</p>
                    <Link href="#" className="text-orange-500 text-bold ">Conhecer anime</Link>
                    </div>
                  </div>
              </div>


              <div className="md:basis-1/3 lg:basis-1/3 xl:basis-1/6">
                  <div className="relative p-2">
                    <Image src={Gender2} alt="One Piece" className="opacity-80"/>
                    <div className="absolute top-5 bg-red-500 text-sm text-white rounded ml-2 px-2 py-1"><p>Aventura</p></div>
                                       <div className="absolute bottom-0 flex flex-col p-5">
                    <h5 className="text-white text-2xl text-bold">One Piece</h5>
                    <p className="text-white text-md">Uma jornada sem limites.</p>
                    <Link href="#" className="text-orange-500 text-bold ">Conhecer anime</Link>
                    </div>
                  </div>
              </div>

              <div className="md:basis-1/3 lg:basis-1/3 xl:basis-1/6">
                  <div className="relative p-2">
                    <Image src={Gender3} alt="Your Name" className="opacity-80"/>
                    <div className="absolute top-5 ml-2 px-2 py-1 bg-red-500 text-white text-sm rounded"><p>Romance</p></div>
                                        <div className="absolute bottom-0 flex flex-col p-5">
                    <h5 className="text-white text-2xl text-bold">Your Name</h5>
                    <p className="text-white text-md">Um encontro além do tempo.</p>
                    <Link href="#" className="text-orange-500 text-bold ">Conhecer anime</Link>
                    </div>
                  </div>
              </div>

              <div className="md:basis-1/3 lg:basis-1/3 xl:basis-1/6">
                  <div className="relative p-2">
                    <Image src={Gender4} alt="Frieren" className="opacity-80"/>
                    <div className="absolute top-5 ml-2 px-2 py-1 rounded text-white text-sm bg-red-500"><p>Fantasia</p></div>
                                        <div className="absolute bottom-0 flex flex-col p-5">
                    <h5 className="text-white text-2xl text-bold">Frieren</h5>
                    <p className="text-white text-md">A magia de uma nova jornada.</p>
                    <Link href="#" className="text-orange-500 text-bold ">Conhecer anime</Link>
                    </div>
                  </div>
              </div>

              <div className="md:basis-1/3 lg:basis-1/3 xl:basis-1/6">
                  <div className="relative p-2">
                    <Image src={Gender5} alt="Steins;Gate" className="opacity-80"/>
                    <div className="absolute top-5 ml-2 px-2 py-1 rounded text-white text-sm bg-red-500"><p>Ficção Cientifica</p></div>
                                        <div className="absolute bottom-0 flex flex-col p-5">
                    <h5 className="text-white text-2xl text-bold">Steins;Gate</h5>
                    <p className="text-white text-md">Cada escolha muda o futuro.</p>
                    <Link href="#" className="text-orange-500 text-bold ">Conhecer anime</Link>
                    </div>
                  </div>
              </div>

              <div className="md:basis-1/3 lg:basis-1/3 xl:basis-1/6">
                  <div className="relative p-2">
                    <Image src={Gender6} alt="Violet Evergarden" className="opacity-80"/>
                    <div className="absolute top-5 ml-2 px-2 py-1 text-white rounded text-sm bg-red-500"><p>Drama</p></div>
                                      <div className="absolute bottom-0 flex flex-col p-5">
                    <h5 className="text-white text-2xl text-bold">Violet Evergarden</h5>
                    <p className="text-white text-md">Emoções em cada palavra.</p>
                    <Link href="#" className="text-orange-500 text-bold ">Conhecer anime</Link>
                    </div>
                  </div>
              </div>

            </div>
        </section>

        <section className="w-full h-auto">
          <div className="relative ">
            <Image src={bannerRodape} alt="" className="object-cover h-[300px] opacity-50"/>

            <div className="p-5 absolute top-1/2 -translate-y-1/2">
              <h2 className="text-5xl text-bold text-orange-300">Boas histórias conectam pessoas.</h2>
              <p className="text-xl text-white">Um espaço para descobrir animes, explorar universos<br/>e compartilhar a paixão por grandes histórias.</p>
            </div>
          </div>
        </section>

        <footer className="w-full h-auto"><p className="text-center p-5 text-white w-full">© 2026 Gabriel Belo. Todos os direitos reservados.</p></footer>

    </main>
  )
}

export default homePage
