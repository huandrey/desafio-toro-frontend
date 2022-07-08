import isEmailValid from '../utils/mask';
import useErrors from './useErrors';

export default function useValidateForms({ fields }) {
  const {
    errors, setError, removeError, getErrorMessageByFieldName,
  } = useErrors();

  function handleRequiredFieldChange({ name, messageIfHasError }) {
    return (event) => {
      if (!event.target.value) {
        setError({ field: name, message: messageIfHasError });
      } else {
        removeError(name);
      }
    };
  }

  function handleEmailChange(event) {
    if (!event.target.value || !isEmailValid(event.target.value)) {
      setError({ field: 'email', message: 'E-mail inválido' });
    } else {
      removeError('email');
    }
  }

  function handlePasswordChange(event, { confirm }) {
    if (!event.target.value) {
      setError({ field: 'password', message: 'Senha obrigatória' });
    } else {
      removeError('password');
    }

    if (confirm) {
      if (event.target.value && fields.confirmPassword !== event.target.value) {
        setError({ field: 'confirmPassword', message: 'Senhas não conferem' });
      } else {
        removeError('confirmPassword');
      }
    }
  }

  function handleConfirmPasswordChange(event) {
    if (event.target.value !== fields.password) {
      setError({ field: 'confirmPassword', message: 'Senhas não conferem' });
    } else {
      removeError('confirmPassword');
    }
  }

  function handleDate(event, type) {
    const dateError = {
      day: {
        maxValue: 31,
        field: 'day',
        message: true,
      },
      month: {
        maxValue: 12,
        field: 'month',
        message: true,
      },
      year: {
        maxValue: new Date(Date.now()).getUTCFullYear(),
        minLength: 4,
        field: 'year',
        message: 'Data inválida',
      },
    };

    const hasSomeError = event.target.value.length < dateError[type].minLength
      || event.target.value > dateError[type].maxValue
      || Object.values(dateError).some(
        (item) => item.field !== type && fields[item.field] > item.maxValue,
      );

    if (!event.target.value || hasSomeError) {
      Object.values(dateError).forEach(({ field, message }) => {
        setError({ field, message });
      });
    } else {
      Object.values(dateError).forEach(({ field }) => {
        removeError(field);
      });
    }
  }

  function validateFields({
    name, confirm, event, messageIfHasError,
  }) {
    const handlers = {
      email: {
        target: handleEmailChange,
        args: [event],
      },
      password: {
        target: handlePasswordChange,
        args: [event, { confirm }],
      },
      confirmPassword: {
        target: handleConfirmPasswordChange,
        args: [event],
      },
      day: {
        target: handleDate,
        args: [event, 'day'],
      },
      month: {
        target: handleDate,
        args: [event, 'month'],
      },
      year: {
        target: handleDate,
        args: [event, 'year'],
      },
    };

    const defaultHandler = {
      target: handleRequiredFieldChange({ name, messageIfHasError }),
      args: [event],
    };

    const handler = handlers[name] || defaultHandler;
    handler.target.apply(null, handler.args);
  }

  return {
    errors, getErrorMessageByFieldName, setError, removeError, validateFields,
  };
}
