import { Dimensions, StyleSheet } from 'react-native';
import { Palette, Spacing, Typography } from '@src/theme';
import { SCREEN_HEIGHT } from '@gorhom/bottom-sheet';
import { responsiveSize } from '@src/utils';

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    padding: Spacing.l,
  },
  handleContainer: {
    backgroundColor: Palette.darkBlue,
    padding: Spacing.l,
    borderTopLeftRadius: Spacing.s,
    borderTopRightRadius: Spacing.s,
    flexDirection: 'row',
    alignItems: 'center',
  },
  id: {
    ...Typography.headingBold,
    color: Palette.white,
  },
  monthVehicleIdWrapper: {
    paddingHorizontal: Spacing.l,
    flexGrow: 1,
  },
  month: {
    color: Palette.white,
    ...Typography.subHeading,
    marginBottom: Spacing.xs,
  },
  jobId: {
    color: Palette.darkGrey,
    ...Typography.body,
  },
  price: {
    color: Palette.white,
    ...Typography.subHeading,
  },
  wrapperIcon: {
    width: Spacing.xxxl,
    aspectRatio: 1,
    backgroundColor: Palette.blue,
    borderRadius: Spacing.xxxl / 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  contentHeader: {
    flexDirection: 'row',
    marginBottom: Spacing.xl,
  },
  type: {
    color: Palette.blue,
    ...Typography.subHeadingBold,
    marginLeft: Spacing.l,
  },
  routeContainer: {
    flexDirection: 'row',
    paddingHorizontal: Spacing.m,
  },
  locationInfo: {
    marginLeft: Spacing.xl,
  },
  name: {
    ...Typography.subHeadingBold,
    color: Palette.black,
    marginBottom: Spacing.s,
  },
  address: {
    ...Typography.body,
    color: Palette.darkGrey,
    marginBottom: Spacing.s,
  },
  status: {
    ...Typography.statusBold,
    color: Palette.green,
  },
  completedTime: {
    marginTop: SCREEN_HEIGHT * 0.08,
    color: Palette.blue,
    ...Typography.body,
    marginBottom: Spacing.m,
  },
  dateContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: Spacing.xxl,
  },
  jobDate: {
    ...Typography.body,
    color: Palette.darkGrey,
  },
  date: {
    ...Typography.bodyBold,
    color: Palette.black,
  },
  headerOverlay: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: -0.21 * Dimensions.get('window').height,
    height: 0.2 * Dimensions.get('window').height,
    backgroundColor: Palette.white,
  },
  headerOverlayContent: {
    alignItems: 'center',
    paddingVertical: Spacing.m,
    justifyContent: 'space-between',
    flex: 1,
  },
  vehicleId: {
    ...Typography.bodyBold,
    color: Palette.black,
  },
  priceHeaderWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  priceHeader: {
    ...Typography.heading,
    marginRight: Spacing.m,
    color: Palette.black,
  },
  modalContent: {
    padding: Spacing.l,
    flex: 1,
  },
  mapImage: {
    height: responsiveSize(200),
    width: responsiveSize(280),
    alignSelf: 'center',
  },
  modalTitle: {
    ...Typography.headingBold,
    color: Palette.black,
    textAlign: 'center',
    marginHorizontal: Spacing.m,
  },
  modalDescription: {
    ...Typography.body,
    color: Palette.darkGrey,
    textAlign: 'center',
    marginTop: Spacing.m,
    marginBottom: Spacing.xl,
  },
  btnCloseModal: {
    alignSelf: 'flex-end',
  },
  loadingIndicator: {
    position: 'absolute',
    right: Spacing.l,
  },
});

export default styles;
