import React, { useCallback, useEffect, useMemo, useState } from 'react';
import services from '../../services';
import { randomNumber } from '../../utils';
import { toast } from 'react-toastify';
import Loading from '../../components/Loading';
import { Button } from '@mui/material';
import { pink, grey, red, yellow, green, blue, indigo, purple } from '@mui/material/colors';
export interface TagType {
  name: string;
}

export default function Tag() {
  const colorMap = useMemo<{ [key: string]: { [key: string]: string } }>(
    () => ({
      0: pink,
      1: grey,
      2: red,
      3: yellow,
      4: green,
      5: blue,
      6: indigo,
      7: purple,
    }),
    []
  );
  const [tags, setTags] = useState<TagType[]>([]);
  const [status, setStatus] = useState<string>('start');

  const reqTags = useCallback(async () => {
    try {
      const res = await services.tags.getTags<TagType[]>();
      if (res?.data?.code === 1) {
        setTags(res.data?.data ?? []);
        setStatus('ok');
      } else if (res?.data?.code === 0) {
        toast.error(res?.data?.message || '请求失败');
      } else {
        setStatus('fail');
      }
      console.log(res);
    } catch (error) {}
  }, []);

  useEffect(() => {
    reqTags();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="w-full bg-white rounded ">
      {status === 'ok' ? (
        tags.map((item: TagType) => (
          <>
            <Button
              variant="contained"
              size="medium"
              sx={{
                bgcolor: colorMap[String(randomNumber())][500],
                margin: 1,
              }}
            >
              {item.name}
            </Button>
          </>
        ))
      ) : (
        <Loading status={status} cb={reqTags} />
      )}
    </div>
  );
}
