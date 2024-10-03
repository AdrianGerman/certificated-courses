import "./HeaderTitle.css"

export const HeaderTitle = () => {
  return (
    <>
      <div className="title">
        <h1>CERTIFICADOS</h1>
      </div>

      <div className="text-info">
        <p>
          ¡Hola, soy <strong>Adrian German</strong>! En este sitio están
          recopilados todos los cursos que he realizado en plataformas de
          aprendizaje como <strong>Platzi</strong>, <strong>Udemy</strong>, etc.
          Mi objetivo es tener la web actualizada para que sea de fácil acceso
          conocer un poco de mis intereses en el mundo del{" "}
          <strong>Desarrollo web.</strong>
        </p>
        <a href="https://adriangerman.com" target="_blank">
          <img
            src="https://pbs.twimg.com/profile_images/1776312145816227840/ISlE225__400x400.jpg"
            alt="la imagen de example"
          />
        </a>
      </div>
    </>
  )
}
