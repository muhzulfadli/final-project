import pf from './img/Rectangle3.png';
import { BiCube } from 'react-icons/bi';

function product () {
  return (
    <div className="App">
      <div className='container max-w-screen-lg mx-auto'>
        <div className='title text-xl font-bold py-6'>
          <h1>Daftar Jual Saya</h1>
        </div>

        {/* card nama penjual */}
        <div className='flex p-6  shadow-auto justify-between rounded-3xl'>
          <div className='flex'>
            <img src={pf} />
            <div className='text-profil ml-5'>
              <h1 className='text-xl'>Nama Penjual</h1>
              <p className='text-sm text-gray-300'>Kota</p>
            </div>
          </div>
          <button className='border border-ungu rounded-xl px-6 py-2'>
            Edit
          </button>
        </div>
        {/* card nama penjual end */}

        {/* Kategori start */}
        <div className='grid grid-cols-4 mt-8'>
          <div className='categori col-span-1 shadow-auto rounded-lg p-6'>
            <h2 className='text-xl'>Kategori</h2>
            <button className='flex text-ungu py-3'>
              <BiCube />
              Semua Produk</button>
            <hr className=''></hr>
          </div>
        </div>
        {/* Kategori end */}
      </div>
    </div>
  );
}

export default product;


 