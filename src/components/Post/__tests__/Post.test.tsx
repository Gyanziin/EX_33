import { render, screen } from "@testing-library/react"
import Post from ".."

describe('Testes para o post', () => {
    test('Deve renderizar corretamente', () => {
        render(<Post imageUrl="https://via.placeholder.com/300x300">Teste</Post>)
        expect(screen.getByText('Teste')).toBeInTheDocument()
    })
})