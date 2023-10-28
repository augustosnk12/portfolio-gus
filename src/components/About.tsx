import React from 'react';

export function About() {
	return (
		<div>
			<div className='title-header'>
				<div className='text-[52px] mt-20 leading-[3.5rem] first-title'>
					<span>Olá, boa noite!</span> <br />
					<span>Eu sou o Augusto</span>
				</div>
				<span className='grid grid-cols-1 md:grid-cols-2 sm:grid-cols-2 xs:grid-cols-2 mt-3 text-[20px] second-title'>
					Com 4 anos de experiência, atualmente trabalho desenvolvendo soluções usando a stack do Javascript
				</span>
			</div>
		</div>
	);
}
