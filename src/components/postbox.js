import { BiLike, BiDislike } from "react-icons/bi";
import "./postbox.css"
import { useState, useEffect } from "react";
import axios from 'axios';
import TextBox from "./textbox";

function PostBox(id){
    const [countLike, setCountLike] = useState(0);
    const [countDislike, setCountDislike] = useState(false);
    const [post, setPost] = useState({})
    const [post2, setPost2] = useState({})
    useEffect(() => {
        const getData = async () => {
          try {
            const res = await axios.get(
              `http://localhost:5000/painel`,
              {
                headers: {
                  "Cache-Control": "no-cache",
                  Pragma: "no-cache",
                  Expires: "0",
                },
              },
            );
    
            setPost(res.data.atividades[id]);

            console.log("Success:", res.data.atividades[id]);
          } catch (err) {
            console.error("Erro ao carregar API", err);
          }
        };
        getData();
      }, []);

   
    return(
        <div className="title">{post.nome}
         <div className="corpo"> 
            <p>{post.email}</p>
            </div>
         <footer> 
            <p>  
            <BiLike className="btnLike" onClick={() => setCountLike(countLike + 1)}/> 
            {countLike} 
            <BiDislike className="btnLike"  onClick={() => setCountDislike(true)}/>
            {countDislike} 
            </p>
         </footer>
        {countDislike && <TextBox></TextBox>}
        </div>

              
    );
}
export default PostBox;