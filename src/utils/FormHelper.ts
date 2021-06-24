import { EventModel } from './Block';
import { DEFAULT_FORM_FIELD_SELECTOR, DEFAULT_FORM_SELECTOR } from '../constants';

type Selectors = {
  prefix?: string;
  form?: string;
  field?: string;
};
type InitialState<TValues> = {
  values?: TValues;
  errors?: Errors<TValues>;
};
type Validators<TValues> = {
  [K in keyof TValues]?: (value: TValues[K], values: TValues) => string | undefined
};
type Errors<TValues> = { [K in keyof TValues]?: string };
type Options<TValues> = {
  selectors?: Selectors;
  initialState?: InitialState<TValues>;
  validators: Validators<TValues>;

  onSubmit: (values: TValues, event: Event) => void;
  onValidate?: (errors: Errors<TValues>) => void;
};

export class FormHelper<TValues> {
  private static _joinSelector(prefix?: string, selector?: string) {
    return [prefix, selector].filter(Boolean).join(' ');
  }

  private readonly _initialState: Options<TValues>['initialState'];

  private readonly _validators: Options<TValues>['validators'] = {};

  private readonly _onSubmit: Options<TValues>['onSubmit'];

  private readonly _onValidate: Options<TValues>['onValidate'];

  private readonly _values: TValues;

  get values() {
    return this._values;
  }

  private _errors: Errors<TValues>;

  get errors() {
    return this._errors;
  }

  private _events: EventModel[] = [];

  get events() {
    return this._events;
  }

  constructor(
    {
      initialState = {},
      selectors = {},
      validators,
      onSubmit,
      onValidate,
    }: Options<TValues>,
  ) {
    this._initialState = initialState;

    const { values = {} as TValues, errors = {} } = this._initialState;
    this._errors = errors;
    this._values = values;

    this._validators = validators;

    this._onSubmit = onSubmit;
    this._onValidate = onValidate;

    const {
      prefix,
      form: formSelector = DEFAULT_FORM_SELECTOR,
      field: fieldSelector = DEFAULT_FORM_FIELD_SELECTOR,
    } = selectors;
    const form = FormHelper._joinSelector(prefix, formSelector);
    const field = FormHelper._joinSelector(form, fieldSelector);

    this._events.push({
      type: 'submit',
      callback: this._handleSubmit,
      selectors: form,
    }, {
      type: 'blur',
      callback: this._handleBlur,
      selectors: field,
    }, {
      type: 'change',
      callback: this._handleChange,
      selectors: field,
    });
  }

  private _getElementNameAndValueByEvent = (event: Event) => {
    const target = event.target as HTMLInputElement;
    const name = target.name as keyof TValues;
    const value = target.value as unknown as TValues[keyof TValues];
    return {
      name,
      value,
    };
  };

  private _validateValues = (values: Partial<TValues>) => {
    const errors: Errors<TValues> = {};
    Object.entries(values as TValues).forEach(([key, value]) => {
      const validator = this._validators[key as keyof TValues];
      if (validator) {
        const error = validator(value, this._values);
        if (error) {
          errors[key as keyof TValues] = error;
        }
      }
    });
    return errors;
  };

  private _handleSubmit = (event: Event) => {
    event.preventDefault();
    this._errors = this._validateValues(this._values);

    const isFormNotValid = !!Object.keys(this._errors).length;

    if (isFormNotValid) {
      this._onValidate?.(this._errors);
    } else {
      this._onSubmit(this._values, event);
    }
  };

  private _handleBlur = (event: Event) => {
    const { name, value } = this._getElementNameAndValueByEvent(event);
    if (!name) {
      return;
    }
    this._errors = {
      ...this._errors,
      [name]: this._validateValues({ [name]: value } as Partial<TValues>)[name],
    };

    this._onValidate?.(this._errors);
  };

  private _handleChange = (event: Event) => {
    const { name, value } = this._getElementNameAndValueByEvent(event);
    if (!name) {
      return;
    }
    this._values[name] = value;
  };
}

export type FormHelperData<TValues> = Pick<FormHelper<TValues>, 'values' | 'errors'>;
