function Form(){
  return( 
    <form>
    <input type="text" placeholder='Nome' />
    <input type="email" placeholder="email"/>
    <input type="text" placeholder= 'cpf' />
    <input type="number" placeholder="age" />    

    <input type='button' value='Cadastrar'/>
    <input type='button' value='Alterar'/>
    <input type='button' value='Remover'/>
    <input type='button' value='Cancelar'/>

    </form>
  )
}

export default Form;