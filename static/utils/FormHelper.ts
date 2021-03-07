import {EventModel} from "./Block";

type Errors<TValues> = { [K in keyof TValues]?: string };
type Options<TValues> = {
    initialValues?: TValues;
    initialErrors?: Errors<TValues>;
    validating?: { [K in keyof TValues]?: (value: TValues[K], values: TValues) => string | undefined };
    onSubmit: (values: TValues) => void;
    onValidate?: (errors: Errors<TValues>) => void;
    selector?: string;
};

export class FormHelper<TValues> {
    static SELECTORS = {
        form: '.form',
        input: '.field .field__input'
    }

    _meta: Pick<Options<TValues>, 'initialValues' | 'initialErrors' | 'selector'>;
    _errors: Errors<TValues>;
    _values: TValues;
    _validating: NonNullable<Options<TValues>['validating']>;
    props: Pick<Options<TValues>, 'onSubmit' | 'onValidate'>

    constructor(
        {
            initialErrors = {} as Errors<TValues>,
            initialValues = {} as TValues,
            selector = '',
            onValidate,
            onSubmit,
            validating = {} as NonNullable<Options<TValues>['validating']>
        }: Options<TValues>
    ) {
        this._meta = {
            initialErrors,
            initialValues,
            selector,
        }
        this._errors = initialErrors;
        this._values = initialValues;
        this._validating = validating;

        this.props = {
            onValidate,
            onSubmit
        }
    }

    get errors(): Errors<TValues> {
        return this._errors;
    }
    get values(): TValues {
        return this._values;
    }
    get events(): EventModel[] {
        const {selector} = this._meta;
        const formSelector = `${selector} ${FormHelper.SELECTORS.form}`;
        const fieldSelector = `${selector} ${FormHelper.SELECTORS.form} ${FormHelper.SELECTORS.input}`;

        return [
            {
                type: 'submit',
                callback: this._handleSubmit,
                selectors: formSelector
            },
            {
                type: 'focus',
                callback: this._handleFocus,
                selectors: fieldSelector
            },
            {
                type: 'blur',
                callback: this._handleBlur,
                selectors: fieldSelector
            },
            {
                type: 'change',
                callback: this._handleChange,
                selectors: fieldSelector
            },
        ]
    }

    _validateValues = (values: Partial<TValues>) => {
        const errors: Errors<TValues> = {};
        Object.entries(values as TValues).forEach(([key, value]) => {
            const validate = this._validating[key as keyof TValues];
            if (validate) {
                const error = validate(value, this._values);
                if (error) {
                    errors[key as keyof TValues] = error
                }
            }
        })
        return errors
    }

    _getElementNameAndValueByEvent = (event: Event) => {
        const target = event.target as HTMLInputElement;
        const name = target.name as keyof TValues;
        const value = target.value as unknown as TValues[keyof TValues];
        return {
            name,
            value,
        }
    }

    _handleChange = (event: Event) => {
        const {name, value} = this._getElementNameAndValueByEvent(event)
        if (!name) {
            return
        }
        this._values[name] = value;
    }

    _handleFocus = (event: Event) => {
        const {name} = this._getElementNameAndValueByEvent(event)
        const {onValidate} = this.props;
        if (!name || !onValidate) {
            return
        }
        onValidate({
            ...this._errors,
            [name]: undefined
        })
    }

    _handleBlur = (event: Event) => {
        const {name, value} = this._getElementNameAndValueByEvent(event)
        const {onValidate} = this.props;
        if (!name || !onValidate) {
            return
        }
        onValidate({
            ...this._errors,
            ...this._validateValues(
                {[name]: value} as Partial<TValues>
            )
        })
    }

    _handleSubmit = (event: Event) => {
        event.preventDefault();
        const target = event.target as HTMLFormElement;
        const formData = new FormData(target)
        const values: TValues = {} as TValues;
        formData.forEach((value, key) => {
            values[key as keyof TValues] = value as unknown as TValues[keyof TValues]
        })

        const errors = this._validateValues(values);

        const isFormNotValid = Object.keys(errors).length;
        const {onValidate, onSubmit} = this.props;
        if (isFormNotValid) {
            onValidate && onValidate(errors);
        } else {
            onSubmit(values)
        }
    }
}

export type FormHelperData<TValues> = Pick<FormHelper<TValues>, 'events' | 'values' | 'errors'>
export type FormHelperMeta<TValues> = Pick<FormHelper<TValues>, 'values' | 'errors'>
export const getFormData = <TValues>(options: Options<TValues>): FormHelperData<TValues> => {
    const {events, values, errors} = new FormHelper(options)
    return {
        events,
        values,
        errors
    }
}
export const emailRegExp = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;