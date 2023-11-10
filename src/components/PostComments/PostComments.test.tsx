import { fireEvent, render, screen } from '@testing-library/react';

import PostComment from '.';

describe('Teste para o componente PostComment', () => {
    it('Deve renderizar o componente corretamente', () => {
        render(<PostComment/>);
        expect(screen.getByText('Comentar')).toBeInTheDocument();
    });

    it('Deve adicionar dois comentários', () => {
        render(<PostComment/>)

        fireEvent.change(screen.getByTestId('comment-text'), {
            target: {
                value: 'Comentário adicionado via testes',
            }
        })

        fireEvent.click(screen.getByTestId('comment-btn'))

        fireEvent.change(screen.getByTestId('comment-text'), {
            target: {
                value: 'Comentário 2 adicionado via testes',
            }
        })

        fireEvent.click(screen.getByTestId('comment-btn'))

        expect(screen.getAllByTestId('comment-element')).toHaveLength(2);
    })
});