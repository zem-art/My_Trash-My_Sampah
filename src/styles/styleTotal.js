import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  header: {
    height: '10%',
    // borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#5ad488ff',
  },
  Title: {
    fontSize: 20,
    color: '#ffffff',
  },
  bosy: {
    borderWidth: 1,
  },
  pactIcon: {
    height: 110,
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    height: 100,
    width: 100,
  },
  data: {
    // borderWidth: 1,
    borderBottomWidth: 1,
    borderBottomColor: '#a9a9',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    height: 45,
  },
  bottom: {
    height: '12%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
    // borderWidth: 1,
    marginTop: 20,
  },
  klik: {
    height: 50,
    width: '100%',
    backgroundColor: '#5ad488ff',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
});

export {styles};
