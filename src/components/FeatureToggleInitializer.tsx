import { SplitFactory, SplitTreatments } from '@splitsoftware/splitio-react';
import { ISplitTreatmentsChildProps } from "@splitsoftware/splitio-react/types/types";

interface FeatureToggleInitializerProps {
    id: string;
    children: React.ReactNode;
    featureList: Array<string>;
}

const FeatureToggleInitializer: React.FC<FeatureToggleInitializerProps> = ({ id, children, featureList }) => {
    
    const sdkConfig: SplitIO.IBrowserSettings = {
        core: {
          authorizationKey: process.env.REACT_APP_SPLITIO_CLIENT_KEY as string,
          key: id || 'key'
        }
      };


    return (
        <SplitFactory config={sdkConfig} >
            <SplitTreatments names={['SPCOR-371_UI_fix_dashboard_back_button_does_not_push_history_state']} >
            {({ treatments, isReady }: ISplitTreatmentsChildProps) => {
              return (
                <>
                 {children}
                </>
              )
            }}
          </SplitTreatments>
        </SplitFactory> 
    );
};

export default FeatureToggleInitializer;
