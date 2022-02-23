import {
  Button,
  FormControl,
  FormHelperText,
  Input,
  InputLabel,
  Stack,
  Typography
} from '@mui/material';
import { ChangeEvent, useEffect, useState } from 'react';
import { useParams } from 'react-router';

export type CrudEditProps<T> = {
  title: string;
  record: Partial<T>;
  fields: { id: keyof T; name: string; helpText?: string | null; type?: 'text' | 'image' }[];
  fetch: (id: string) => Promise<Partial<T>>;
  onUpdate: (data: Partial<T>) => Promise<void>;
  onSubmit: () => Promise<any>;
};

const CrudEdit = <T,>(props: CrudEditProps<T>) => {
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const { id } = useParams();
  const { onUpdate, fetch } = props;

  useEffect(() => {
    if (!id) {
      return;
    }
    (async () => {
      setLoading(true);
      try {
        const item = await fetch(id);
        await onUpdate(item);
      } catch (ex) {
        console.error(ex);
      }
      setLoading(false);
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  const submitAction = async () => {
    setSubmitting(true);
    try {
      await props.onSubmit();
      alert('success');
    } catch (ex) {
      alert('Error saving record');
      console.error(ex);
    }
    setSubmitting(false);
  };

  const renderTextField = (f: CrudEditProps<T>['fields'][0]) => {
    const val = props.record[f.id];

    const onUpdate = (event: ChangeEvent<HTMLInputElement>) => {
      event.preventDefault();
      props.onUpdate({
        ...props.record,
        [f.id]: event.target.value
      });
    };
    return (
      <FormControl key={f.id.toString()}>
        <InputLabel htmlFor={f.id.toString()}>{f.name}</InputLabel>
        <Input
          id={f.id.toString()}
          name={f.name}
          aria-describedby="my-helper-text"
          value={val}
          onChange={onUpdate}
        />
        <FormHelperText id="my-helper-text">{f.helpText}</FormHelperText>
      </FormControl>
    );
  };

  const renderField = (f: CrudEditProps<T>['fields'][0]) => {
    if (f.type === 'image') {
      /// Get image rendering here
    }

    return renderTextField(f);
  };

  if (loading) {
    return <p>Loading</p>;
  }

  return (
    <Stack direction="column">
      <Typography variant="h4">{props.title}</Typography>
      <Stack direction="column" justifyContent="flex-start" alignItems="flex-start" spacing={0}>
        {props.fields.map((field) => {
          return renderField(field);
        })}
      </Stack>
      <Button disabled={submitting} onClick={submitAction} variant="text">
        Submit
      </Button>
    </Stack>
  );
};

export default CrudEdit;
