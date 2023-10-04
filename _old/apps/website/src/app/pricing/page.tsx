import { Card } from '@/components/card/card';
import Section from '@/components/section/section';
import H2 from '@/components/text/h2';
import { Button } from '@/components/ui/button';

const features = [
  'Legal Consultation',
  'Document Templates',
  'Document Review',
  'E-Signatures',
  'Legal Research',
  'Regulatory Compliance',
  'Online Dispute Resolution',
  'Client Portal',
  'Educational Resources',
  'Legal Updates',
];

const pricingTiers = [
  {
    label: 'Swiss Association',
    price: '$500 / mo',
    features: features.slice(0, 6),
  },
  {
    label: 'Swiss Foundation',
    price: '$1000 / mo',
    features: features.slice(0, 8),
  },
  {
    label: 'Custom (Based on Swiss Jurisdictions)',
    price: '$2500 / mo',
    features: features,
  },
];

const IncludedIcon = () => (
  <svg
    className="text-green-10"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 20C16.4187 20 20 16.4187 20 12C20 7.58125 16.4187 4 12 4C7.58125 4 4 7.58125 4 12C4 16.4187 7.58125 20 12 20ZM15.5312 10.5312L11.5312 14.5312C11.2375 14.825 10.7625 14.825 10.4719 14.5312L8.47188 12.5312C8.17813 12.2375 8.17813 11.7625 8.47188 11.4719C8.76563 11.1813 9.24062 11.1781 9.53125 11.4719L11 12.9406L14.4688 9.46875C14.7625 9.175 15.2375 9.175 15.5281 9.46875C15.8187 9.7625 15.8219 10.2375 15.5281 10.5281L15.5312 10.5312Z"
      fill="currentColor"
    ></path>
  </svg>
);

const NotIncludedIcon = () => (
  <svg
    className="text-slate-10"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 20C16.4187 20 20 16.4187 20 12C20 7.58125 16.4187 4 12 4C7.58125 4 4 7.58125 4 12C4 16.4187 7.58125 20 12 20ZM9.46875 9.46875C9.7625 9.175 10.2375 9.175 10.5281 9.46875L11.9969 10.9375L13.4656 9.46875C13.7594 9.175 14.2344 9.175 14.525 9.46875C14.8156 9.7625 14.8187 10.2375 14.525 10.5281L13.0562 11.9969L14.525 13.4656C14.8187 13.7594 14.8187 14.2344 14.525 14.525C14.2312 14.8156 13.7562 14.8187 13.4656 14.525L11.9969 13.0562L10.5281 14.525C10.2344 14.8187 9.75938 14.8187 9.46875 14.525C9.17812 14.2312 9.175 13.7562 9.46875 13.4656L10.9375 11.9969L9.46875 10.5281C9.175 10.2344 9.175 9.75938 9.46875 9.46875Z"
      fill="currentColor"
    ></path>
  </svg>
);

export default function Pricing() {
  return (
    <div className="flex h-screen flex-col items-center justify-center">
      <h1 className="text-md font-bold md:text-lg">Pricing</h1>

      <Section small>
        <div className="flex w-full flex-col gap-6 md:flex-row">
          {pricingTiers.map((tier, i) => (
            <div className="w-full" key={i}>
              <Card>
                <div className="relative z-20 flex w-full flex-col space-y-6 p-6">
                  <span className="text-center text-base">{tier.label}</span>
                  <H2 className="text-center">{tier.price}</H2>

                  <ul className="flex flex-col gap-6">
                    {features.map((feature, i) => (
                      <li className="flex items-center gap-2 text-left" key={i}>
                        {tier.features.includes(feature) ? (
                          <IncludedIcon />
                        ) : (
                          <NotIncludedIcon />
                        )}
                        <span className="sans text-slate-11 text-sm font-normal leading-[1.6]">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <Button className="bg-white text-black hover:bg-slate-300">
                    Get started.
                  </Button>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
}
