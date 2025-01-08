import React from 'react';

import { saudacao, yearWorkingAsProgrammer } from '../utils/generalFunctions'
import { SkillIcon } from './SkillIcons'

export function About() {
	return (
		<div className='mr-5 ml-5'>
			<div className='title-header'>
				<div className='text-[52px] mt-20 leading-[3.5rem] first-title'>
					<span>Olá, {saudacao()}!</span> <br />
					<span>Eu sou o Augusto</span>
				</div>
				<span className='grid grid-cols-1 md:grid-cols-2 sm:grid-cols-2 xs:grid-cols-2 mt-3 text-[20px] second-title font-semibold'>
					Com {yearWorkingAsProgrammer()} anos de experiência, atualmente trabalho desenvolvendo soluções usando a stack do Javascript
				</span>
			</div>

			<div className='about-body mt-[7rem] text-center'>
				<span className='about-body-title text-[40px] font-medium'>Skillset</span> < br />
				<span className='text-[20px] second-title font-semibold'>Eis um resumo das tecnologias que eu uso, ou usei em algum momento na história...</span>

				<div className='flex justify-between'>
					<SkillIcon icon='nextjs' link='https://nextjs.org/' />
					<SkillIcon icon='react' link='https://react.dev/' />
					<SkillIcon icon='react-native' link='https://reactnative.dev/' />
					<SkillIcon icon='flutter' link='https://flutter.dev/' />
				</div>

				<div className='flex justify-evenly'>
					<SkillIcon icon='nestjs' link='https://nestjs.com/' />
					<SkillIcon icon='nodejs' link='https://nodejs.org/' />
				</div>

				<div className='flex justify-between'>
					<SkillIcon icon='mysql' link='https://www.mysql.com/' svgClass='svg-img' />
					<SkillIcon icon='mongodb' link='https://www.mongodb.com/' />
					<SkillIcon icon='firebase' link='https://firebase.google.com/?hl=pt' />
				</div>

				<div className='flex justify-center'>
					<SkillIcon icon='aws' link='https://aws.amazon.com/pt/' />
				</div>
			</div>
		</div>
	);
}
