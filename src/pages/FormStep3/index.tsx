import { ChangeEvent, useEffect } from 'react';
import { useHistory, Link } from 'react-router-dom';
import { Theme } from '../../components/Theme';
import { useForm, FormActions } from '../../contexts/FormContext';
import * as C from './styles';

export const FormStep3 = () => {
  const history = useHistory();
  const { state, dispatch } = useForm();

  useEffect(() => {
    if (state.name === '') {
      history.push('/');
    } else {
      dispatch({
        type: FormActions.setCurrentStep,
        payload: 3,
      });
    }
  }, []);

  const handleNextStep = () => {
    if (state.email !== '' && state.github !== '') {
      history.push('/end');
    } else {
      alert('Preencha os dados');
    }
  };

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: FormActions.setEmail,
      payload: e.target.value,
    });
  };

  const handleGitHubChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: FormActions.setGithub,
      payload: e.target.value,
    });
  };
  return (
    <Theme>
      <C.Container>
        <p>Passo 3/4</p>
        <h1>Legal {state.name}, onde te achamos?</h1>
        <p>Preencha os campos para conseguirmos entrar em contato.</p>

        <hr />
        <label>
          Qual seu e-mail?
          <input type="email" value={state.email} onChange={handleEmailChange} />
        </label>
        <label>
          Qual seu GitHub?
          <input type="url" value={state.github} onChange={handleGitHubChange} />
        </label>
        <Link to="/step2" className="backButton">
          Voltar
        </Link>
        <button onClick={handleNextStep}>Próximo</button>
      </C.Container>
    </Theme>
  );
};
