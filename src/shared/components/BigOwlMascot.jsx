import owlImage from "../../assets/imgs/common/owl-in-tree.png";

const BigOwlMascot = () => {

    return (
        <div className={`fixed flex justify-center items-end right-[-0rem] w-[27rem] h-[100vh] 
          max-[1355px]:right-[-5rem]
          max-[1010px]:hidden
          max-[690px]:flex
          max-[690px]:h-[40%]
          max-[690px]:top-[-28vh]
          max-[690px]:rotate-180

        [@media(max-height:630px)]:hidden
        `}>

            <img className="absoluto flex justify-center items-center w-[100%] h-[41rem] max-[690px]:w-[14rem] max-[690px]:h-[20rem]
              
            " src={owlImage} alt="Ilustração de uma coruja estilizada, formada por linhas geométricas simples, empoleirada no topo de uma árvore escura. A coruja tem olhos grandes e redondos, asas e peitos destacados por traços retos e angulares, transmitindo um visual moderno e minimalista." />
        </div>
    )
}
//   max-[690px]:top-[-28vh]
//           max-[690px]:rotate-180
export default BigOwlMascot;