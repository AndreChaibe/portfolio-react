import owlImage from "../../assets/imgs/common/owl-in-tree.png";

const BigOwlMascot = () => {

    return (
        <div className={`fixed flex justify-center items-end right-[-0rem] w-[27rem] h-[100vh] 
          max-[1355px]:right-[-5rem]
          max-[1010px]:hidden

        [@media(max-height:599px)_and_(min-height:492px)]:top-48
        [@media(max-height:491px)]:top-90
        `}>

            <img className="absoluto flex justify-center items-center w-[100%] h-[41rem] 
              
            " src={owlImage} alt="Ilustração de uma coruja estilizada, formada por linhas geométricas simples, empoleirada no topo de uma árvore escura. A coruja tem olhos grandes e redondos, asas e peitos destacados por traços retos e angulares, transmitindo um visual moderno e minimalista." />
        </div>
    )
}

export default BigOwlMascot;