'use client'
import * as z from 'zod'
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage} from "@/components/ui/form";
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select";
import {Textarea} from "@/components/ui/textarea";
import {RadioGroup, RadioGroupItem} from "@/components/ui/radio-group";
import {Checkbox} from "@/components/ui/checkbox";
import {Slider} from "@/components/ui/slider";
import {useState} from "react";

const propType = [
    {
        id: "immobili di lusso",
        label: "Immobili di lusso",
    },
    {
        id: "dimore storiche",
        label: "Dimore Storiche",
    },
    {
        id: "hotel",
        label: "Hotel",
    },
    {
        id: "resort",
        label: "Resort",
    },
    {
        id: "cantine vitivinicole",
        label: "Cantine Vitivinicole",
    },
    {
        id: "agriturisimi",
        label: "Agriturismi",
    },
] as const


const formSchema = z.object({
    completeName: z.string(),
    city: z.string(),
    companyAddress: z.string(),
    companyPhone: z.string(),
    emailAddress: z.string().email(),
    password: z.string().min(12),
    passwordConfirm: z.string(),
    linkedinOrInsLink: z.string(),
    businessTurnover: z.enum(["Less than 100k", "Between 100k and 300k", "Between 300k and 500k", "More 500k"]),
    averageValue: z.enum(["From 0 to 1 mln", "From 1 mln to 5 mln", "More than 5 mln"]),
    commissionPercentage: z.number().min(0).max(100).default(0),
    agencyLogo: z.string(),
    teamPhoto: z.string(),
    moreCompanyTime: z.string(),
    possVideoCall: z.string(),
    possBookApp: z.string(),
    moreThan100Prop: z.string(),
    wtpCont: z.string(),
    sentRelevantWtp: z.string(),

    propType: z.array(z.string()).refine((value) => value.some((item) => item), {
        message: "You have to select at least one item.",
    }),

    accountType: z.enum(["personal", "company"]),
    companyName: z.string(),
    belongFranchise: z.enum(["Yes", "No"]),
    oneMoreLocation: z.enum(["Yes", "No"]),

    lanEng: z.enum(["Yes", "No"], {
        required_error: "You need to select a notification type.",
    }),

    teamNumPeople: z.enum(["Less than 3", "Between 3 and 5", "Between 5 and 10", "More than 10"]),

    shortDescription: z.string()
        .min(10, {
            message: "Description must be at least 10 characters.",
        })
        .max(160, {
            message: "Description must not be longer than 30 characters.",
        })

}).refine((data) => {
        return data.password === data.passwordConfirm
    },
    {
        message: "Password do not match",
        path: ["passwordConfirm"]
    })


export default function Home() {

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            completeName: "",
            companyAddress: "",
            companyPhone: "",
            emailAddress: "",
            password: "",
            passwordConfirm: "",
            companyName: "",
            agencyLogo: "",
            propType: [],
        }
    });

    const accountType = form.watch("accountType");

    const handleSubmit = (values: z.infer<typeof formSchema>) => {
        console.log({values});
    }


    const [selectedFile, setSelectedFile] = useState(null)

    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-6 lg:p-24">
            <Form {...form}>
                <form onSubmit={form.handleSubmit(handleSubmit)}
                      className="max-w-xl w-full flex flex-col gap-4">
                    {/* Complete Name */}
                    <FormField
                        control={form.control}
                        name="completeName"
                        render={({field}) => {
                            return <FormItem>
                                <FormLabel>Complete Name</FormLabel>
                                <FormControl>
                                    <Input
                                        placeholder="Name and Lastname"
                                        type="text"{...field}
                                        className="rounded-none"
                                    />
                                </FormControl>
                                <FormMessage/>
                            </FormItem>
                        }}/>

                    {/* Company Name */}
                    <FormField
                        control={form.control}
                        name="companyName"
                        render={({field}) => {
                            return <FormItem>
                                <FormLabel>Company Name</FormLabel>
                                <FormControl>
                                    <Input
                                        placeholder="Type company name"
                                        {...field}
                                        className="rounded-none"
                                    />
                                </FormControl>
                                <FormMessage/>
                            </FormItem>
                        }}
                    />

                    {/* Address */}
                    <FormField
                        control={form.control}
                        name="companyAddress"
                        render={({field}) => {
                            return <FormItem>
                                <FormLabel>Company Address</FormLabel>
                                <FormControl>
                                    <Input
                                        placeholder="Type Company Address"
                                        type="text"
                                        {...field}
                                        className="rounded-none"
                                    />
                                </FormControl>
                                <FormMessage/>
                            </FormItem>
                        }}/>

                    {/* Company Phone */}
                    <FormField
                        control={form.control}
                        name="companyPhone"
                        render={({field}) => {
                            return <FormItem>
                                <FormLabel>Company Phone</FormLabel>
                                <FormControl>
                                    <Input
                                        placeholder="Type company Phone"
                                        type="tel"
                                        {...field}
                                        className="rounded-none"
                                    />
                                </FormControl>
                                <FormMessage/>
                            </FormItem>
                        }}/>


                    {/*Password */}
                    <FormField
                        control={form.control}
                        name="emailAddress"
                        render={({field}) => {
                            return <FormItem>
                                <FormLabel>Email Address</FormLabel>
                                <FormControl>
                                    <Input
                                        placeholder="Email address"
                                        type="email"
                                        {...field}
                                        className="rounded-none"
                                    />
                                </FormControl>
                                <FormMessage/>
                            </FormItem>
                        }}/>

                    {/* Property Type */}
                    <FormField
                        control={form.control}
                        name="propType"
                        render={() => (
                            <FormItem>
                                <div className="mb-4">
                                    <FormLabel className="text-base">Property Type</FormLabel>
                                </div>
                                {propType.map((item) => (
                                    <FormField
                                        key={item.id}
                                        control={form.control}
                                        name="propType"
                                        render={({field}) => {
                                            return (
                                                <FormItem
                                                    key={item.id}
                                                    className="flex flex-row items-start space-x-3 space-y-0"
                                                >
                                                    <FormControl>
                                                        <Checkbox
                                                            checked={field.value?.includes(item.id)}
                                                            onCheckedChange={(checked) => {
                                                                return checked
                                                                    ? field.onChange([...field.value, item.id])
                                                                    : field.onChange(
                                                                        field.value?.filter(
                                                                            (value) => value !== item.id
                                                                        )
                                                                    )
                                                            }}
                                                        />
                                                    </FormControl>
                                                    <FormLabel className="text-sm font-normal">
                                                        {item.label}
                                                    </FormLabel>
                                                </FormItem>
                                            )
                                        }}
                                    />
                                ))}
                                <FormMessage/>
                            </FormItem>
                        )}
                    />

                    {/* Business Turnover */}
                    <FormField
                        control={form.control}
                        name="businessTurnover"
                        render={({field}) => {
                            return <FormItem>
                                <FormLabel>Business Turnover</FormLabel>
                                <Select onValueChange={field.onChange}>
                                    <FormControl
                                        className="rounded-none">
                                        <SelectTrigger>
                                            <SelectValue placeholder="Choose your annual turnover"/>
                                        </SelectTrigger>
                                    </FormControl>
                                    <SelectContent>
                                        <SelectItem value="Less than 100k">Less than 100k</SelectItem>
                                        <SelectItem value="Between 100k and 300k">Between 100k and 300k</SelectItem>
                                        <SelectItem value="Between 300k and 500k">Between 300k and 500k</SelectItem>
                                        <SelectItem value="More 500k">More 500k</SelectItem>
                                    </SelectContent>
                                </Select>
                                <FormMessage/>
                            </FormItem>
                        }}
                    />

                    {/* Speak English */}
                    <FormField
                        control={form.control}
                        name="lanEng"
                        render={({field}) => (
                            <FormItem className="space-y-3">
                                <FormLabel>Do you speak English at the agency?</FormLabel>
                                <FormControl>
                                    <RadioGroup
                                        onValueChange={field.onChange}
                                        defaultValue={field.value}
                                        className="flex flex-col space-y-1"
                                    >
                                        <FormItem className="flex items-center space-x-3 space-y-0">
                                            <FormControl>
                                                <RadioGroupItem value="Yes"/>
                                            </FormControl>
                                            <FormLabel className="font-normal">
                                                Yes
                                            </FormLabel>
                                        </FormItem>
                                        <FormItem className="flex items-center space-x-3 space-y-0">
                                            <FormControl>
                                                <RadioGroupItem value="No"/>
                                            </FormControl>
                                            <FormLabel className="font-normal">
                                                No
                                            </FormLabel>
                                        </FormItem>
                                    </RadioGroup>
                                </FormControl>
                                <FormMessage/>
                            </FormItem>
                        )}
                    />

                    {/* Belong Franchise */}
                    <FormField
                        control={form.control}
                        name="belongFranchise"
                        render={({field}) => (
                            <FormItem className="space-y-3">
                                <FormLabel>Do you belong to a franchise?</FormLabel>
                                <FormControl>
                                    <RadioGroup
                                        onValueChange={field.onChange}
                                        defaultValue={field.value}
                                        className="flex flex-col space-y-1"
                                    >
                                        <FormItem className="flex items-center space-x-3 space-y-0">
                                            <FormControl>
                                                <RadioGroupItem value="Yes"/>
                                            </FormControl>
                                            <FormLabel className="font-normal">
                                                Yes
                                            </FormLabel>
                                        </FormItem>
                                        <FormItem className="flex items-center space-x-3 space-y-0">
                                            <FormControl>
                                                <RadioGroupItem value="No"/>
                                            </FormControl>
                                            <FormLabel className="font-normal">
                                                No
                                            </FormLabel>
                                        </FormItem>
                                    </RadioGroup>
                                </FormControl>
                                <FormMessage/>
                            </FormItem>
                        )}
                    />
                    {/* One or more Location */}
                    <FormField
                        control={form.control}
                        name="oneMoreLocation"
                        render={({field}) => (
                            <FormItem className="space-y-3">
                                <FormLabel>Do you have one or more locations?</FormLabel>
                                <FormControl>
                                    <RadioGroup
                                        onValueChange={field.onChange}
                                        defaultValue={field.value}
                                        className="flex flex-col space-y-1"
                                    >
                                        <FormItem className="flex items-center space-x-3 space-y-0">
                                            <FormControl>
                                                <RadioGroupItem value="Yes"/>
                                            </FormControl>
                                            <FormLabel className="font-normal">
                                                Yes
                                            </FormLabel>
                                        </FormItem>
                                        <FormItem className="flex items-center space-x-3 space-y-0">
                                            <FormControl>
                                                <RadioGroupItem value="No"/>
                                            </FormControl>
                                            <FormLabel className="font-normal">
                                                No
                                            </FormLabel>
                                        </FormItem>
                                    </RadioGroup>
                                </FormControl>
                                <FormMessage/>
                            </FormItem>
                        )}
                    />

                    {/* Team People */}
                    <FormField
                        control={form.control}
                        name="teamNumPeople"
                        render={({field}) => {
                            return <FormItem>
                                <FormLabel>How many people does the team consist of?</FormLabel>
                                <Select onValueChange={field.onChange}>
                                    <FormControl
                                        className="rounded-none">
                                        <SelectTrigger>
                                            <SelectValue placeholder="Choose"/>
                                        </SelectTrigger>
                                    </FormControl>
                                    <SelectContent>
                                        <SelectItem value="Less than 3">Less than 3</SelectItem>
                                        <SelectItem value="Between 3 and 5">Between 3 and 5</SelectItem>
                                        <SelectItem value="Between 5 and 10">Between 5 and 10</SelectItem>
                                        <SelectItem value="More than 10">More than 10</SelectItem>
                                    </SelectContent>
                                </Select>
                                <FormMessage/>
                            </FormItem>
                        }}/>

                    {/* Linkedin Or Instagram ProfileURL */}
                    <FormField
                        control={form.control}
                        name="linkedinOrInsLink"
                        render={({field}) => {
                            return <FormItem>
                                <FormLabel>Indicate the Linkedin profile of the agency owner or the agency`&apos;`,s Instagram
                                    profile</FormLabel>
                                <FormControl>
                                    <Input
                                        placeholder="ex: https://linkedin.com/youName"
                                        type="url"{...field}
                                        className="rounded-none"
                                    />
                                </FormControl>
                                <FormMessage/>
                            </FormItem>
                        }}/>

                    {/* Password */}
                    {/*
            <FormField
                control={form.control}
                name="password"
                render={({ field }) => {
                    return <FormItem>
                        <FormLabel>Password</FormLabel>
                        <FormControl>
                            <Input placeholder="Type your password"
                                   type="password"
                                   {...field}
                                   className="rounded-none"
                            />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                }}/>
            <FormField
                control={form.control}
                name="passwordConfirm"
                render={({ field }) => {
                    return <FormItem>
                        <FormLabel>Password Confirm</FormLabel>
                        <FormControl>
                            <Input
                                placeholder="Password confirm"
                                type="password"
                                {...field}
                                className="rounded-none"
                            />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                }}/> */}


                    {/* Short Description */}
                    <FormField
                        control={form.control}
                        name="shortDescription"
                        render={({field}) => {
                            return <FormItem>
                                <FormLabel>Short Description</FormLabel>
                                <FormControl>
                                    <Textarea
                                        placeholder="Tell us a little bit about your company"
                                        {...field}
                                        className="rounded-none resize-none"
                                    />
                                </FormControl>
                                <FormDescription>
                                    You can use min. 60 characters and max. 280 characters
                                </FormDescription>
                                <FormMessage/>
                            </FormItem>
                        }}/>

                    {/* Average property value in your portfolio */}
                    <FormField
                        control={form.control}
                        name="averageValue"
                        render={({field}) => {
                            return <FormItem>
                                <FormLabel>Average property value in your portfolio</FormLabel>
                                <Select onValueChange={field.onChange}>
                                    <FormControl
                                        className="rounded-none">
                                        <SelectTrigger>
                                            <SelectValue placeholder="Choose your annual turnover"/>
                                        </SelectTrigger>
                                    </FormControl>
                                    <SelectContent>
                                        <SelectItem value="from 0 to 1 mln">From 0 to 1 mln</SelectItem>
                                        <SelectItem value="from 1 to 5 mln">From 1 to 5 mln</SelectItem>
                                        <SelectItem value="More than 5 mln">More than 5 mln</SelectItem>
                                    </SelectContent>
                                </Select>
                                <FormMessage/>
                            </FormItem>
                        }}
                    />

                    {/* Commission Percentage */}
                    <FormField
                        control={form.control}
                        name="commissionPercentage"
                        render={({field: {value, onChange}}) => (
                            <FormItem>
                                <FormLabel>Price - {value}</FormLabel>
                                <FormControl>
                                    <Slider
                                        min={0}
                                        max={100}
                                        step={1}
                                        value={value}
                                        onValueChange={(newValue) => onChange(newValue)}
                                    />
                                </FormControl>
                            </FormItem>
                        )}
                    />

                    {/* UpLoad Logo */}
                    <FormField
                        control={form.control}
                        name="commissionPercentage"
                        render={({field: {value, onChange}}) => (
                            <FormItem>
                                <FormLabel>Your Logo</FormLabel>
                                <FormControl>
                                    <Input id="picture" type="file"/>
                                </FormControl>
                            </FormItem>
                        )}
                    />

                    {/* UpLoad Team photos */}
                    <FormField
                        control={form.control}
                        name="teamPhoto"
                        render={({field: {value, onChange}}) => (
                            <FormItem>
                                <FormLabel>Photos Team</FormLabel>
                                <FormControl>
                                    <Input id="picture" type="file"/>
                                </FormControl>
                            </FormItem>
                        )}
                    />

                    {/* Company Time */}
                    <FormField
                        control={form.control}
                        name="moreCompanyTime"
                        render={({field}) => (
                            <FormItem className="space-y-3">
                                <FormLabel>More than 5 years of real estate agency activity</FormLabel>
                                <FormControl>
                                    <RadioGroup
                                        onValueChange={field.onChange}
                                        defaultValue={field.value}
                                        className="flex flex-col space-y-1"
                                    >
                                        <FormItem className="flex items-center space-x-3 space-y-0">
                                            <FormControl>
                                                <RadioGroupItem value="Yes"/>
                                            </FormControl>
                                            <FormLabel className="font-normal">
                                                Yes
                                            </FormLabel>
                                        </FormItem>
                                        <FormItem className="flex items-center space-x-3 space-y-0">
                                            <FormControl>
                                                <RadioGroupItem value="No"/>
                                            </FormControl>
                                            <FormLabel className="font-normal">
                                                No
                                            </FormLabel>
                                        </FormItem>
                                    </RadioGroup>
                                </FormControl>
                                <FormMessage/>
                            </FormItem>
                        )}
                    />

                    {/* Possibility to meet customers via video call */}
                    <FormField
                        control={form.control}
                        name="possVideoCall"
                        render={({field}) => (
                            <FormItem className="space-y-3">
                                <FormLabel>Possibility to meet customers via video call</FormLabel>
                                <FormControl>
                                    <RadioGroup
                                        onValueChange={field.onChange}
                                        defaultValue={field.value}
                                        className="flex flex-col space-y-1"
                                    >
                                        <FormItem className="flex items-center space-x-3 space-y-0">
                                            <FormControl>
                                                <RadioGroupItem value="Yes"/>
                                            </FormControl>
                                            <FormLabel className="font-normal">
                                                Yes
                                            </FormLabel>
                                        </FormItem>
                                        <FormItem className="flex items-center space-x-3 space-y-0">
                                            <FormControl>
                                                <RadioGroupItem value="No"/>
                                            </FormControl>
                                            <FormLabel className="font-normal">
                                                No
                                            </FormLabel>
                                        </FormItem>
                                    </RadioGroup>
                                </FormControl>
                                <FormMessage/>
                            </FormItem>
                        )}
                    />

                    {/* Possibility to book a visit to the property directly online through the LULIEX website */}
                    <FormField
                        control={form.control}
                        name="possBookApp"
                        render={({field}) => (
                            <FormItem className="space-y-3">
                                <FormLabel>Possibility to book a visit to the property directly online through the
                                    LULIEX website</FormLabel>
                                <FormControl>
                                    <RadioGroup
                                        onValueChange={field.onChange}
                                        defaultValue={field.value}
                                        className="flex flex-col space-y-1"
                                    >
                                        <FormItem className="flex items-center space-x-3 space-y-0">
                                            <FormControl>
                                                <RadioGroupItem value="Yes"/>
                                            </FormControl>
                                            <FormLabel className="font-normal">
                                                Yes
                                            </FormLabel>
                                        </FormItem>
                                        <FormItem className="flex items-center space-x-3 space-y-0">
                                            <FormControl>
                                                <RadioGroupItem value="No"/>
                                            </FormControl>
                                            <FormLabel className="font-normal">
                                                No
                                            </FormLabel>
                                        </FormItem>
                                    </RadioGroup>
                                </FormControl>
                                <FormMessage/>
                            </FormItem>
                        )}
                    />

                    {/* Do you have more than 100 properties in your portfolio? */}
                    <FormField
                        control={form.control}
                        name="moreThan100Prop"
                        render={({field}) => (
                            <FormItem className="space-y-3">
                                <FormLabel>Do you have more than 100 properties in your portfolio?</FormLabel>
                                <FormControl>
                                    <RadioGroup
                                        onValueChange={field.onChange}
                                        defaultValue={field.value}
                                        className="flex flex-col space-y-1"
                                    >
                                        <FormItem className="flex items-center space-x-3 space-y-0">
                                            <FormControl>
                                                <RadioGroupItem value="Yes"/>
                                            </FormControl>
                                            <FormLabel className="font-normal">
                                                Yes
                                            </FormLabel>
                                        </FormItem>
                                        <FormItem className="flex items-center space-x-3 space-y-0">
                                            <FormControl>
                                                <RadioGroupItem value="No"/>
                                            </FormControl>
                                            <FormLabel className="font-normal">
                                                No
                                            </FormLabel>
                                        </FormItem>
                                    </RadioGroup>
                                </FormControl>
                                <FormMessage/>
                            </FormItem>
                        )}
                    />

                    {/* Possibility to be contacted by customers on Whatsapp */}
                    <FormField
                        control={form.control}
                        name="wtpCont"
                        render={({field}) => (
                            <FormItem className="space-y-3">
                                <FormLabel>Possibility to be contacted by customers on Whatsapp?</FormLabel>
                                <FormControl>
                                    <RadioGroup
                                        onValueChange={field.onChange}
                                        defaultValue={field.value}
                                        className="flex flex-col space-y-1"
                                    >
                                        <FormItem className="flex items-center space-x-3 space-y-0">
                                            <FormControl>
                                                <RadioGroupItem value="Yes"/>
                                            </FormControl>
                                            <FormLabel className="font-normal">
                                                Yes
                                            </FormLabel>
                                        </FormItem>
                                        <FormItem className="flex items-center space-x-3 space-y-0">
                                            <FormControl>
                                                <RadioGroupItem value="No"/>
                                            </FormControl>
                                            <FormLabel className="font-normal">
                                                No
                                            </FormLabel>
                                        </FormItem>
                                    </RadioGroup>
                                </FormControl>
                                <FormMessage/>
                            </FormItem>
                        )}
                    />


                    {/* Availability to send relevant real estate proposals via Whatsapp, scrupulously adhering ONLY to the criteria indicated by the user */}
                    <FormField
                        control={form.control}
                        name="sentRelevantWtp"
                        render={({field}) => (
                            <FormItem className="space-y-3">
                                <FormLabel>Availability to send relevant real estate proposals via Whatsapp,
                                    scrupulously adhering ONLY to the criteria indicated by the user</FormLabel>
                                <FormControl>
                                    <RadioGroup
                                        onValueChange={field.onChange}
                                        defaultValue={field.value}
                                        className="flex flex-col space-y-1"
                                    >
                                        <FormItem className="flex items-center space-x-3 space-y-0">
                                            <FormControl>
                                                <RadioGroupItem value="Yes"/>
                                            </FormControl>
                                            <FormLabel className="font-normal">
                                                Yes
                                            </FormLabel>
                                        </FormItem>
                                        <FormItem className="flex items-center space-x-3 space-y-0">
                                            <FormControl>
                                                <RadioGroupItem value="No"/>
                                            </FormControl>
                                            <FormLabel className="font-normal">
                                                No
                                            </FormLabel>
                                        </FormItem>
                                    </RadioGroup>
                                </FormControl>
                                <FormMessage/>
                            </FormItem>
                        )}
                    />
                    <Button type="submit" className="w-full rounded-none">Submit</Button>
                </form>
            </Form>
        </main>
    );
}
