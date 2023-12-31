import React from 'react';
import { useCallback, useState } from 'react';
import { View, SafeAreaView, ScrollView, RefreshControl } from 'react-native';
import { Stack, useRouter, useSearchParams } from 'expo-router';

import {
  Company,
  Error,
  JobAbout,
  JobFooter,
  JobTabs,
  ScreenHeaderBtn,
  Specifics,
  Spinner,
} from 'src/components';
import { COLORS, ICONS, SIZES } from 'src/constants';
import useFetch from 'src/hook/useFetch';

const tabs = ['About', 'Qualifications', 'Responsibilities'];

const JobDetails = () => {
  const router = useRouter();
  const params = useSearchParams();
  const [refreshing, setRefreshing] = useState(false);
  const [activeTab, setActiveTab] = useState(tabs[0]);

  const { data, loading, error, refetch } = useFetch('job-details', {
    job_id: params.id,
  });

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    refetch();
    setRefreshing(false);
  }, [refetch]);

  const displayTabContent = () => {
    switch (activeTab) {
      case 'About':
        return (
          <JobAbout info={data[0]?.job_description ?? 'No data provided'} />
        );
      case 'Qualifications':
        return (
          <Specifics
            title="Qualifications"
            points={data[0]?.job_highlights?.Qualifications ?? ['N/A']}
          />
        );
      case 'Responsibilities':
        return (
          <Specifics
            title="Responsibilities"
            points={data[0]?.job_highlights?.Responsibilities ?? ['N/A']}
          />
        );
      default:
        break;
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: COLORS.lightWhite },
          headerShadowVisible: false,
          headerBackVisible: false,
          headerLeft: () => (
            <ScreenHeaderBtn
              iconUrl={ICONS.left}
              size="60%"
              handlePress={() => router.back()}
            />
          ),
          headerRight: () => (
            <ScreenHeaderBtn iconUrl={ICONS.share} size="60%" />
          ),
          headerTitle: '',
        }}
      />

      <ScrollView
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }>
        {loading ? (
          <Spinner />
        ) : error ? (
          <Error />
        ) : (
          <View style={{ flex: 1, padding: SIZES.medium }}>
            <Company
              companyLogo={data[0]?.employer_logo}
              jobTitle={data[0]?.job_title}
              companyName={data[0]?.employer_name}
              location={data[0]?.job_country}
            />
            <JobTabs
              tabs={tabs}
              activeTab={activeTab}
              setActiveTab={setActiveTab}
            />

            {displayTabContent()}
          </View>
        )}
      </ScrollView>

      <JobFooter url={data[0]?.job_google_link} />
    </SafeAreaView>
  );
};

export default JobDetails;
