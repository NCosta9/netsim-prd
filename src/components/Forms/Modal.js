




function Modal(){
    return(

        <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header>
          <Modal.Title> 
            <h4 className="mt-2 fw-bold">Termos e condições</h4>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body> 
        props.temos
        </Modal.Body>
        <Modal.Footer>

          <ButtonFinalizar event={linkWhatsapp} event01={sendEmail} message={termos} text='Concluir'/>
         
        </Modal.Footer>
      </Modal>

    )
}

export default Modal