import React from "react"
import axios from "axios";
import {IState as Props} from "../App"


interface IProps{
    people: Props["people"],
    setPeople:React.Dispatch<React.SetStateAction<Props["people"]>>
  }

const List:React.FC<IProps> =({people,setPeople}) =>{
    async function deletePost(e:any,person:any,index:any) {
          const res = await axios.post("http://localhost:3333/deletePeople",{id:0})
           if(res.status == 200){
                // const noOfRows = [...people.slice(0, index)] ;
                const noOfRows = [...people.slice(0, index), ...people.slice(index+1)] ;
                setPeople( noOfRows );
           }
      }
      function editOpen(){

      }
    const renderList=(): JSX.Element[]=>{
        return people.map((person,index)=>{
            return (
                <div className="col-md-3">
                    <div className="_react_card_content" key={person.id}>
                        <div className="_react_card_content_inner">
                            <div className="_react_card_img_wrap">
                                {/* <button onClick={ ((e) => editOpen(e,person, index))}>Edit</button> */}
                                <button onClick={ ((e) => deletePost(e,person, index))}>Delete</button>
                            </div>
                            <div className="_react_card_txt">
                                <h3 className="_react_card_name">{person.name}</h3>
                                <p className="_react_card_email">{person.email}</p>
                                <h4 className="_react_card_title">{person.title}</h4>
                            </div>
                        </div>
                    </div>
                </div>
            )
        })
    }
    return (
        <div className="_react_card_wrapper" >
            <div className="_react_card_wrap">
                <div className="container">
                    <div className="_react_card_content_wrap">
                        <div className="row">
                            {renderList()}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default List