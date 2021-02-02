//dependencies
import React from 'react';
import { Select } from 'antd';

//data
import { countries } from '../../../data/countries';
import { time_zones } from '../../../data/timeZones';

//destructure Option
const { Option } = Select;

//initialize subject options
const subjects = ['English', 'Science', 'Math', 'Reading'];

export const subjectOptions = subjects.map(subject => (
  <Option key={subject}>{subject}</Option>
));

//initialize grade options
const grades = [
  'Kindergarten',
  '1st Grade',
  '2nd Grade',
  '3rd Grade',
  '4th Grade',
  '5th Grade',
  '6th Grade',
  '7th Grade',
  '8th Grade',
  '9th Grade',
  '10th Grade',
  '11th Grade',
  '12th Grade',
];

export const gradeOptions = grades.map(grade => (
  <Option key={grade}>{grade}</Option>
));

//initialize proficiency options
const proficiency = [];
for (let i = 1; i < 14; i++) {
  proficiency.push(i);
}
export const proficiencyOptions = proficiency.map(proficiency => (
  <Option key={proficiency}>{proficiency}</Option>
));

//initialize language options
const languages = [
  'English',
  'Spanish',
  'Vietnamese',
  'Cantonese',
  'Mandarin',
  'Tagalog',
];

export const languageOptions = languages.map(language => (
  <Option key={language}>{language}</Option>
));

//initialize country options
export const countryOptions = countries.map(country => (
  <Option key={country}>{country}</Option>
));

//initialize time zone options
export const timeZoneOptions = time_zones.map(time_zone => (
  <Option key={time_zone.name}>{time_zone.name}</Option>
));

//initialize contact method options
const methods = [
  'phone',
  'email',
  'mail',
  'wechat',
  'duo',
  'facebook',
  'twitter',
];

export const methodOptions = methods.map(method => (
  <Option key={method}>{method}</Option>
));
