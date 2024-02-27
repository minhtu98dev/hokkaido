import React from 'react'

const Header = () => {
  return (
    <div className='h-100 hover:bg-white transition-colors duration-500 flex items-center absolute top-0 left-0 right-0 z-10 group'>
        <div className='container mx-auto flex px-4 lg:px-0'>
            <ul className="lg:flex hidden gap-x-10 flex-1">
                <li>TRANG CHỦ</li>
                <li>SẢN PHẨM</li>
                <li>LỊCH SỬ SỮA HOKKAIDO</li>
                <li>TRUYỀN THÔNG</li>
                <li>TIN TỨC</li>
                <li>LIÊN HỆ</li>
            </ul>
        </div>
    </div>
  )
}

export default Header