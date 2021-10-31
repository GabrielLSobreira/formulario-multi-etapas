import { useEffect } from 'react';
import { useHistory, Link } from 'react-router-dom';
import { Theme } from '../../components/Theme';
import { useForm, FormActions } from '../../contexts/FormContext';
import * as C from './styles';

export const End = () => {
  const history = useHistory();
  const { state, dispatch } = useForm();

  useEffect(() => {
    if (state.name === '') {
      history.push('/');
    } else if (state.email === '' || state.github === '') {
      history.push('/step3');
    } else {
      dispatch({
        type: FormActions.setCurrentStep,
        payload: 4,
      });
    }
  }, []);

  const handleEndForm = () => {
    alert('Cadastro Finalizado!');
  };

  return (
    <Theme>
      <C.Container>
        <p>Passo 4/4</p>
        <h1>Finalizar Cadastro</h1>
        <p>Confirme os dados e finalize o cadastro.</p>

        <hr />
        <div>
          <p>
            <strong>Nome</strong>: {state.name}
          </p>
          <p>
            <strong>Nível</strong>: {state.level === 0 ? 'Iniciante' : 'Programador'}
          </p>
          <p>
            {' '}
            <strong>E-mail</strong>: {state.email}
          </p>
          <p>
            <strong>GitHub</strong>: {state.github}
          </p>
        </div>
        <Link to="/step3" className="backButton">
          Voltar
        </Link>
        <button onClick={handleEndForm}>Finalizar</button>
      </C.Container>
    </Theme>
  );
};
