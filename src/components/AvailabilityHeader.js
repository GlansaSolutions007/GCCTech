import React from 'react'
import { View } from 'react-native'
import CustomText from './CustomText'
import globalStyles from '../styles/globalStyles'
import Switch from './Switch'
function AvailabilityHeader() {
  return (
    
     <View
          style={[
            globalStyles.bgprimary,
            globalStyles.p4,
            globalStyles.borderRadiuslarge,
            globalStyles.flexrow,
            globalStyles.justifysb,
            globalStyles.alineItemscenter,
            globalStyles.mv3
          ]}
        >
          <View>
            <CustomText style={[globalStyles.f16Bold, globalStyles.textWhite]}>
              Wednesday, July 16
            </CustomText>
            <View style={[globalStyles.flexrow, globalStyles.alineItemscenter]}>
              <CustomText
                style={[globalStyles.f28Bold, globalStyles.textWhite]}
              >
                Today{" "}
              </CustomText>
              <CustomText
                style={[
                  globalStyles.f16Light,
                  globalStyles.neutral100,
                  globalStyles.alineSelfend,
                ]}
              >
                (Online)
              </CustomText>
            </View>
          </View>
          <View style={globalStyles.alineSelfend}>
            <Switch />
          </View>
        </View>
  )
}

export default AvailabilityHeader