import BackButton from '../components/BackButton';
import Header from '../components/Header';

const CreateCompany = () => {
  return (
    <div>
      <Header />
      <main className='container | mt-6'>
        <BackButton />
        <div className='text-center mb-4'>
          <h1 className='page-caption m-0'>Create new company </h1>
          <p className='page-subcaption'>Please fill out the form bellow</p>
        </div>
        <form>
          <div className='form-group'>
            <input type='text' placeholder='name' className='form-input' />
            {/* errors */}
          </div>
          <div className='form-group'>
            <input type='text' placeholder='address' className='form-input' />
            {/* errors */}
          </div>
          <div className='form-group'>
            <input type='text' placeholder='NIT' className='form-input' />
            {/* errors */}
          </div>
          <div className='form-group'>
            <input type='text' placeholder='phone' className='form-input' />
            {/* errors */}
          </div>
          <button className='btn btn-primary btn-block'>Submit</button>
        </form>
      </main>
      {/* form */}
    </div>
  );
};
export default CreateCompany;
