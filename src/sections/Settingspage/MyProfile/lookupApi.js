import React, {useState, useEffect} from 'react'
import BloodGroupApi from '../../../../Service/Setting/ProfileSettings/BloodGroup'
import TimeZoneApi from '../../../../Service/Setting/ProfileSettings/TimeZone'
import CountryGroupApi from '../../../../Service/Setting/ProfileSettings/CountryGroup'
import LanguageGroupApi from '../../../../Service/Setting/ProfileSettings/LanguageGroup'
import StateGroupApi from '../../../../Service/Setting/ProfileSettings/StateGroup'
import _ from 'lodash'

function lookupApi({
	setBloodGroupCode,
	setTimeZoneCode,
	setCountryGroupCode,
	setLanguageGroupCode,
	setStateGroupCode,
	cityParams,
	setCityParams,
	bloodGroupCode,
	getValue,
	setBloodGroup,
	timeZoneCode,
	setTimeZone,
	languageGroupCode,
	setLanguage,
	countryGroupCode,
	setCountry,
	stateGroupCode,
	setState,
}) {
	useEffect(() => {
		BloodGroupApi.BloodGroup().then(Response => {
			setBloodGroupCode(Response.data.data)
		})
	}, [])

	useEffect(() => {
		TimeZoneApi.TimeZone().then(Response => {
			setTimeZoneCode(Response.data.data)
		})
	}, [])

	useEffect(() => {
		CountryGroupApi.countryGroup().then(Response => {
			setCountryGroupCode(Response.data.data)
		})
	}, [])

	useEffect(() => {
		const onSuccess = res => {
			setStateGroupCode(res?.data?.data)
		}
		const onFailure = err => {
			console.log('err', err)
		}
		StateGroupApi.StateGroup({...cityParams}).then(onSuccess, onFailure)
	}, [cityParams])

	useEffect(() => {
		LanguageGroupApi.LanguageGroup().then(Response => {
			setLanguageGroupCode(Response.data.data)
		})
	}, [])

	// default value

	useEffect(() => {
		if (!_.isEmpty(bloodGroupCode)) {
			let temp = _.find(bloodGroupCode, {mastLookupValue: getValue?.data?.custBloodGroup})
			setBloodGroup(temp)
		}
	}, [bloodGroupCode, getValue])

	useEffect(() => {
		if (!_.isEmpty(timeZoneCode)) {
			let temp = _.find(timeZoneCode, {mastLookupValue: getValue?.data?.custTimezone})
			setTimeZone(temp)
		}
	}, [timeZoneCode, getValue])

	useEffect(() => {
		if (!_.isEmpty(languageGroupCode)) {
			let temp = _.find(languageGroupCode, {mastLookupValue: getValue?.data?.langPreference})
			setLanguage(temp)
		}
	}, [languageGroupCode, getValue])

	useEffect(() => {
		if (!_.isEmpty(countryGroupCode)) {
			let temp = _.find(countryGroupCode, {mastLookupValue: getValue?.data?.country?.mastLookupValue})
			setCityParams({...cityParams, mastCountryCode: !_.isEmpty(temp?.mastLookupValue) ? temp?.mastLookupValue : ''})
			setCountry(temp)
		}
	}, [countryGroupCode, getValue])

	return <div></div>
}

export default lookupApi
