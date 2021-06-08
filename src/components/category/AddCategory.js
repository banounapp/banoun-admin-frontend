import React ,{useState ,Fragment}from 'react'
import {createCategory} from '../../actions/Category';
import { connect } from 'react-redux';
import {Link, Redirect} from 'react-router-dom';


const AddCategory = ({createCategory}) => {

    const[formData,setFormData]=useState({ name:'', description:'',});

    const{name,description}=formData;
    const [img_upload,Setimg_upload]=useState('');
const onChange=e=>setFormData( {...formData,[e.target.name]:e.target.value });

const onSubmit= async e=>{
    e.preventDefault();
    createCategory(name,description,img_upload);  
  
};

    return (
        <Fragment>
        <h1 class="large text-primary">اضافة قسم جديد</h1>
    
        <form className="form"  onSubmit={e=>onSubmit(e)} >
        <input class="choose-file" type="file" name="image "  onChange ={e=>Setimg_upload(e)} />

      
          <div className="form-group">
            <input type="name"
             placeholder="الاسم "
             name="name"
              value={name}
              onChange={e=>onChange(e)}
            
            />
              <input type="description"
             placeholder="الوصف"
             name="description"
              value={description}
              onChange={e=>onChange(e)}
            
            />
         
          </div>
        
          <input type="submit" class="btn btn-primary" value="اضافة" />
        </form>
      
      </Fragment>
    )
}

export default connect(null,{createCategory})(AddCategory)
