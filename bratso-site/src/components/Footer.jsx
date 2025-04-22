import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer style={{
      padding: '1rem',
      backgroundColor: '#f0f0f0',
      textAlign: 'center',
      marginTop: '2rem'
    }}>
      <p>© 2025 Bratso. Todos os direitos reservados.</p>
      <Link to="/termos">Termos e Condições de Uso</Link>
    </footer>
  )
}

export default Footer
