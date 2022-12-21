import { FC, useRef, ReactHTMLElement } from 'react';
import { useForm } from 'react-hook-form';
import { FaFilePdf, FaDownload } from 'react-icons/fa';

interface Props {
  handleDownload: (value: any) => void;
}

const DownloadPdf: FC<Props> = ({ handleDownload }) => {
  const ref = useRef<any>(null);
  const { handleSubmit, register } = useForm({ mode: 'onTouched' });
  return (
    <>
      {/* The button to open modal */}
      <label htmlFor='my-modal' className='btn btn-primary btn-outline'>
        <FaFilePdf className='mr-2' />
        Download Pdf
      </label>

      {/* Put this part before </body> tag */}
      <input type='checkbox' id='my-modal' className='modal-toggle' />
      <div className='modal'>
        <div className='modal-box'>
          <h3 className='font-bold text-lg'>Enter an email address</h3>
          <form onSubmit={handleSubmit(handleDownload)} className='flex gap-3'>
            <input className='flex-1 form-input' {...register('email')} />
            <label
              onClick={() => ref.current.click()}
              htmlFor='my-modal'
              className='btn btn-primary'
            >
              <FaDownload />
            </label>
            <button ref={ref} hidden></button>
          </form>
        </div>
      </div>
    </>
  );
};
export default DownloadPdf;
